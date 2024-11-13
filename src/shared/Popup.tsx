'use client';

import { usePopup } from '@/app/providers/usePopup';
import { useRef } from 'react';

interface PopupProps {
	children?: React.ReactNode;
	navMenu?: boolean;
	custom?: string;
	customOverlay?: string;
}
export const Popup = ({ children, custom, customOverlay, navMenu }: PopupProps) => {
	const popupRef = useRef(null);
	//@ts expect error
	const { closePopup } = usePopup();
	const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target === popupRef.current) {
			closePopup && closePopup();
		}
	};

	return (
		<div
			ref={popupRef}
			onClick={handleClickOutside}
			className={`w-[100%] h-[100vh] top-0 left-0 
      ${customOverlay ? customOverlay : ' absolute'}`}
		>
			<div
				className={`absolute z-50 h-max top-[60px] overflow-hidden bg-cyellow shadow-[5px_10px_30px_0px_rgba(187,187,211,0.50)] rounded-xl 
					 ${navMenu ? 'xl:hidden' : ''}  ${custom ? custom : ' '}`}
			>
				{children}
			</div>
		</div>
	);
};
