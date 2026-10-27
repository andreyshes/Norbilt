#!/usr/bin/env python3
"""
NORBILT Outreach — generates and sends personalized B2B emails via Claude AI.

Usage:
  python outreach.py --preview           # generate emails, do NOT send
  python outreach.py --preview --limit 5 # preview first 5 unsent leads
  python outreach.py --limit 30          # send to next 30 unsent leads
  python outreach.py --group Realtors    # only process one group
  python outreach.py                     # send all unsent (careful!)
"""

import os, csv, time, smtplib, argparse, logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from pathlib import Path
from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv()

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.FileHandler("outreach.log"), logging.StreamHandler()],
)
log = logging.getLogger(__name__)

client = Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

# ── Group-specific pitch angles ──────────────────────────────────────────────

GROUP_ANGLE = {
    "Property Management": (
        "unit turnover repairs, make-ready work between tenants, and ongoing handyman/maintenance support "
        "for their Clark County rental portfolio"
    ),
    "Realtors": (
        "pre-listing repairs and quick cosmetic fixes that help their sellers get top dollar — "
        "things like drywall, flooring, trim, paint prep, and punch-list items for buyers"
    ),
    "Apartments": (
        "unit refreshes between tenants, common area repairs, and ongoing maintenance — "
        "they need a reliable local contractor they can call without chasing quotes every time"
    ),
    "Pest Control": (
        "cross-referral partnership — pest techs often discover water damage, rot, and structural issues "
        "their clients need repaired, and NORBILT can return the favor on renovation leads"
    ),
    "Attorneys & Legal": (
        "estate and probate property prep — getting inherited or settlement properties assessed, "
        "repaired, and ready for sale or occupancy"
    ),
    "Other": (
        "commercial space repairs, tenant improvements, or ongoing maintenance for their property"
    ),
}

# ── System prompt ─────────────────────────────────────────────────────────────

SYSTEM_PROMPT = f"""You are Andrey, the owner of NORBILT — a licensed general contracting company in Vancouver, WA \
(license NORBI**741CS). You do remodeling, finish carpentry, flooring, drywall, kitchen/bath renovations, \
and general repair work across Clark County.

Write a short cold outreach email to a local business. Hard rules:
- Under 70 words total (not counting subject line or sign-off)
- 3 short paragraphs — 1 to 2 sentences each
- Do NOT start with "I hope this finds you well," "My name is," or any opener like that
- No buzzwords: no "transform," "elevate," "dream," "seamless," "excited to connect," "leverage," "reach out"
- No fake urgency, no pressure, no exclamation points
- Mention Clark County or their city naturally — sound like someone who actually works here
- End with a single soft question or offer, e.g. "Worth a quick call?" or "Happy to share some recent project photos if useful."
- Sign off exactly as: Andrey | NORBILT | {os.environ.get('FROM_PHONE', 'your phone')} | norbilt.com
- Add one blank line then: "Reply STOP to opt out."
"""

# ── Email generation ──────────────────────────────────────────────────────────

def generate_email(business_name: str, group: str, city: str) -> tuple[str, str]:
    """Returns (subject_line, email_body)."""
    angle = GROUP_ANGLE.get(group, GROUP_ANGLE["Other"])

    prompt = (
        f"Business: {business_name}\n"
        f"Location: {city}, WA\n"
        f"They are: {group}\n"
        f"Pitch angle: {angle}\n\n"
        f"Write the subject line on line 1 (no 'Subject:' prefix). "
        f"Then a blank line. Then the email body."
    )

    response = client.messages.create(
        model="claude-sonnet-5",
        max_tokens=350,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": prompt}],
    )

    raw = response.content[0].text.strip()
    parts = raw.split("\n", 2)
    subject = parts[0].strip()
    body = parts[2].strip() if len(parts) > 2 else raw
    return subject, body


# ── Email sending ─────────────────────────────────────────────────────────────

def send_email(to_email: str, subject: str, body: str) -> bool:
    from_email = os.environ["FROM_EMAIL"]
    from_name = os.environ.get("FROM_NAME", "Andrey | NORBILT")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = f"{from_name} <{from_email}>"
    msg["To"] = to_email
    msg["Reply-To"] = from_email
    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP(os.environ["SMTP_HOST"], int(os.environ["SMTP_PORT"])) as server:
            server.ehlo()
            server.starttls()
            server.login(os.environ["SMTP_USER"], os.environ["SMTP_PASSWORD"])
            server.sendmail(from_email, to_email, msg.as_string())
        return True
    except Exception as e:
        log.error(f"SMTP error sending to {to_email}: {e}")
        return False


# ── Sent log ──────────────────────────────────────────────────────────────────

FIELDNAMES = ["timestamp", "email", "business", "group", "priority", "subject", "status"]

def load_sent(log_path: Path) -> set[str]:
    if not log_path.exists():
        return set()
    with open(log_path) as f:
        return {row["email"] for row in csv.DictReader(f)}

def record(log_path: Path, row: dict):
    new_file = not log_path.exists()
    with open(log_path, "a", newline="") as f:
        w = csv.DictWriter(f, fieldnames=FIELDNAMES)
        if new_file:
            w.writeheader()
        w.writerow(row)


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--preview", action="store_true", help="Print emails without sending")
    parser.add_argument("--limit", type=int, default=50, help="Max emails per run (default 50)")
    parser.add_argument("--group", type=str, default=None, help="Only process this group")
    parser.add_argument("--delay", type=float, default=4.0, help="Seconds between sends (default 4)")
    args = parser.parse_args()

    script_dir = Path(__file__).parent
    leads_path = script_dir / "leads.csv"
    log_path = script_dir / "sent_log.csv"

    if not leads_path.exists():
        log.error("leads.csv not found. Run from the outreach/ directory.")
        return

    already_sent = load_sent(log_path)
    log.info(f"Already sent: {len(already_sent)}  |  Preview mode: {args.preview}")

    with open(leads_path) as f:
        leads = list(csv.DictReader(f))

    # Filter by group if specified
    if args.group:
        leads = [l for l in leads if l["group"].lower() == args.group.lower()]

    # High priority first
    order = {"High": 0, "Medium": 1, "Low": 2}
    leads.sort(key=lambda x: order.get(x.get("priority", "Low"), 2))

    processed = 0
    skipped = 0

    for lead in leads:
        if processed >= args.limit:
            break

        email = lead.get("email", "").strip()
        if not email:
            skipped += 1
            continue
        if email in already_sent:
            skipped += 1
            continue

        business = lead["name"]
        group = lead["group"]
        city = lead.get("city", "Vancouver")
        priority = lead.get("priority", "Medium")

        log.info(f"Generating → {business} ({group}, {priority})")
        subject, body = generate_email(business, group, city)

        if args.preview:
            print(f"\n{'─'*55}")
            print(f"  TO      : {email}")
            print(f"  SUBJECT : {subject}")
            print(f"  PRIORITY: {priority}")
            print(f"{'─'*55}")
            print(body)
        else:
            success = send_email(email, subject, body)
            status = "sent" if success else "failed"
            record(log_path, {
                "timestamp": datetime.now().isoformat(timespec="seconds"),
                "email": email,
                "business": business,
                "group": group,
                "priority": priority,
                "subject": subject,
                "status": status,
            })
            log.info(f"{'✓' if success else '✗'} {status.upper()} → {email}")
            time.sleep(args.delay)

        processed += 1

    log.info(f"\nDone. Processed: {processed}  |  Skipped (no email / already sent): {skipped}")
    if not args.preview:
        log.info(f"See sent_log.csv for full history.")


if __name__ == "__main__":
    main()
