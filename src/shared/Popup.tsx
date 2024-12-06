'use client';

import { usePopup } from '@/app/providers/usePopup';
import { useRef } from 'react';

interface PopupProps {
	children?: React.ReactNode;
	navMenu?: boolean;
	custom?: string;
	customOverlay?: string;
}

export const Popup = ({ children, customOverlay }: PopupProps) => {
	const popupRef = useRef(null);
	const { closePopup, closeProduct } = usePopup(); // Отримуємо функції з контексту

	const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target === popupRef.current) {
			closePopup();
			closeProduct();
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
