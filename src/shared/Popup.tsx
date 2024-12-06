'use client';

import { usePopup } from '@/app/providers/usePopup';
import { useRef } from 'react';

interface PopupProps {
	children?: React.ReactNode;
	navMenu?: boolean;
	custom?: string;
	customOverlay?: string;
	closePopup: () => void;
}
export const Popup = ({ children, custom, customOverlay, navMenu }: PopupProps) => {
	//@ts expect error
	const popupRef = useRef(null);
	const { closePopup, closeProduct } = usePopup();

	const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target === popupRef.current) {
			closePopup();
			closeProduct();
			console.log('close');
		}
	};

	return (
		<div
			ref={popupRef}
			onClick={handleClickOutside}
			className={`absolute z-50 w-full h-[100vh] top-0 left-0 
      ${customOverlay ? customOverlay : '  '}`}
		>
			{children}
		</div>
	);
};
