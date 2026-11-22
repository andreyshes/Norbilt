'use client';
import { useEffect } from 'react';

declare global {
	interface Window {
		gtag: (...args: unknown[]) => void;
	}
}

export default function PhoneConversionTracker() {
	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const link = (e.target as HTMLElement).closest('a');
			if (link?.href?.startsWith('tel:') && link.href.includes('3602169920')) {
				if (typeof window.gtag === 'function') {
					window.gtag('event', 'conversion', {
						send_to: 'AW-17966936255/HrQ7CLj5i70dEL_hpvdC',
					});
				}
			}
		};
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	}, []);
	return null;
}
