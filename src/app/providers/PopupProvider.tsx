'use client';
import { createContext, useState } from 'react';

export interface IPopupContext {
	isOpenPopup: boolean;
	closePopup: () => void;
	openPopup: () => void;
	togglePopup: () => void;
	openProduct: () => void;
	closeProduct: () => void;
}
interface PopupProps {
	children: React.ReactNode;
}

export const PopupContext = createContext<IPopupContext | null>(null);
export const PopupProvider = ({ children }: PopupProps) => {
	const [isOpenPopup, setIsOpenPopup] = useState(false);
	const [isOpenProduct, setIsOpenProduct] = useState(false);

	const closePopup = () => {
		setTimeout(() => {
			setIsOpenPopup(false);
		}, 100);
	};
	const openPopup = () => setIsOpenPopup(true);
	const togglePopup = () => setIsOpenPopup(prev => !prev);
	const openProduct = () => setIsOpenProduct(true);
	const closeProduct = () => setIsOpenProduct(prev => !prev);

	const contextValue = { closePopup, isOpenPopup, openPopup, togglePopup, closeProduct, openProduct };
	return <PopupContext.Provider value={contextValue}>{children}</PopupContext.Provider>;
};
