'use client';

import { usePopup } from '@/app/providers/usePopup';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

interface PopupProps {
	children?: React.ReactNode;
	navMenu?: boolean;
	custom?: string;
	customOverlay?: string;
	currentPathLink?: string | null;
}

export const Popup = ({ children, customOverlay, currentPathLink }: PopupProps) => {
	const popupRef = useRef(null);
	const { closePopup, closeProduct } = usePopup(); // Отримуємо функції з контексту
	const router = useRouter();

	const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target === popupRef.current) {
			closePopup();
			closeProduct();
			if (currentPathLink) {
				router.replace(currentPathLink);
			} else {
				router.replace('/');
			}
		}
	};

	return (
		<div
			ref={popupRef}
			onClick={handleClickOutside}
			className={`absolute z-50 w-full h-[100vh] top-0 left-0 
      ${customOverlay ? customOverlay : ''}`}
		>
			{children}
		</div>
	);
};
