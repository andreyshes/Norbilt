import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#x27;");
}

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const { name, email, phone, projectType, details, honeypot, loadedAt } = body;

		// Spam protection: reject bots that fill the honeypot or submit too fast
		if (honeypot || (typeof loadedAt === "number" && Date.now() - loadedAt < 3000)) {
			return NextResponse.json({ success: true }); // silent reject
		}

		if (!name || !projectType || !details) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 },
			);
		}

		const firstName = name.trim().split(/\s+/)[0];
		const safeFirstName = escapeHtml(firstName);
		const safeProjectType = escapeHtml(projectType);
		const safeDetails = escapeHtml(details);
		const safeName = escapeHtml(name);
		const safePhone = escapeHtml(phone || "N/A");
		const safeEmail = escapeHtml(email || "N/A");

		const confirmationHtml = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:16px;background:#F8F6F3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;">
    <div style="background:#1F2E2B;padding:24px 32px;border-radius:12px 12px 0 0;">
      <p style="color:#FFB800;font-weight:900;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;margin:0;">NORBILT &middot; Licensed General Contractor &middot; Vancouver, WA</p>
    </div>
    <div style="background:#ffffff;padding:36px 32px;border:1px solid #E8E4DE;border-top:none;border-radius:0 0 12px 12px;">

      <h1 style="font-size:22px;font-weight:900;color:#1F2E2B;margin:0 0 20px;letter-spacing:-0.02em;">Hi ${safeFirstName},</h1>

      <p style="color:#374151;line-height:1.65;margin:0 0 16px;font-size:15px;">
        Thanks for reaching out about your <strong>${safeProjectType}</strong> project.
        We&rsquo;ve received your message and will follow up within 1 business day.
      </p>

      <p style="color:#374151;line-height:1.65;margin:0 0 12px;font-size:15px;">Here&rsquo;s what you sent us:</p>

      <div style="background:#F8F6F3;border-left:4px solid #FFB800;padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 24px;">
        <p style="color:#4B5563;line-height:1.65;margin:0;font-size:14px;white-space:pre-wrap;">${safeDetails}</p>
      </div>

      <p style="color:#374151;line-height:1.65;margin:0 0 12px;font-size:15px;">
        To help us put together an accurate quote faster, reply to this email with:
      </p>
      <ul style="color:#374151;line-height:1.9;margin:0 0 24px;padding-left:20px;font-size:15px;">
        <li>Photos of the space or area</li>
        <li>Any measurements you have (room dimensions, wall sizes, etc.)</li>
        <li>Specific materials or finishes you have in mind</li>
      </ul>

      <p style="color:#374151;line-height:1.65;margin:0 0 24px;font-size:15px;">
        Need to reach us sooner? Call or text directly at
        <a href="tel:+13602169920" style="color:#1F2E2B;font-weight:700;">(360) 216-9920</a>.
      </p>

      <a href="tel:+13602169920"
         style="display:inline-block;background:#FFB800;color:#000000;font-weight:900;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;padding:14px 28px;border-radius:10px;text-decoration:none;margin-bottom:32px;">
        (360) 216-9920 &mdash; Call or Text
      </a>

      <div style="border-top:1px solid #E8E4DE;padding-top:24px;">
        <p style="margin:0;font-weight:900;font-size:14px;letter-spacing:0.05em;text-transform:uppercase;color:#1F2E2B;">NORBILT</p>
        <p style="margin:4px 0 0;color:#6B7280;font-size:13px;">Licensed General Contractor &middot; Vancouver, WA</p>
        <p style="margin:4px 0 0;color:#6B7280;font-size:13px;">WA Lic. NORBI**741CS</p>
      </div>

    </div>
  </div>
</body>
</html>`;

		const confirmationText = `Hi ${firstName},

Thanks for reaching out about your ${projectType} project. We've received your message and will follow up within 1 business day.

Here's what you sent us:

---
${details}
---

To help us put together an accurate quote faster, reply to this email with:
- Photos of the space or area
- Any measurements you have (room dimensions, wall sizes, etc.)
- Specific materials or finishes you have in mind

Need to reach us sooner? Call or text directly at (360) 216-9920.

—
NORBILT
Licensed General Contractor · Vancouver, WA
WA Lic. NORBI**741CS`;

		// Notification to Norbilt — await this; a failure here returns 500
		const notifyResult = await resend.emails.send({
			from: "Norbilt <hello@norbilt.com>",
			to: ["hello@norbilt.com"],
			replyTo: email,
			subject: `New Project Inquiry — ${projectType}`,
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${safeName}</p>
				<p><strong>Email:</strong> ${safeEmail}</p>
				<p><strong>Phone:</strong> ${safePhone}</p>
				<p><strong>Project Type:</strong> ${safeProjectType}</p>
				<p><strong>Details:</strong></p>
				<p style="white-space:pre-wrap;">${safeDetails}</p>
			`,
		});
		if (notifyResult.error) {
			console.error("[contact] notification email error:", JSON.stringify(notifyResult.error));
			return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
		}

		// Auto-reply to customer — fire and forget; never blocks the 200 or the notification
		if (email) {
			resend.emails.send({
				from: "Norbilt <hello@norbilt.com>",
				to: [email],
				replyTo: "hello@norbilt.com",
				subject: `We got your request, ${firstName}`,
				html: confirmationHtml,
				text: confirmationText,
			}).then((result) => {
				if (result.error) {
					console.error("[contact] auto-reply error:", JSON.stringify(result.error));
				}
			}).catch((err: unknown) => {
				console.error("[contact] auto-reply exception:", err instanceof Error ? err.message : err);
			});
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 },
		);
	}
}
