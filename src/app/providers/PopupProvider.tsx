'use client';
import { createContext, useState } from 'react';

export interface IPopupContext {
	isOpenPopup: boolean;
	closePopup: () => void;
	openPopup: () => void;
	togglePopup: () => void;
	openProduct: () => void;
	closeProduct: () => void;
	isOpenProduct: boolean;
}
interface PopupProps {
	children: React.ReactNode;
}

export const PopupContext = createContext<IPopupContext>({
	isOpenPopup: false,
	closePopup: () => {},
	openPopup: () => {},
	togglePopup: () => {},
	openProduct: () => {},
	closeProduct: () => {},
	isOpenProduct: false,
});
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
	const closeProduct = () => setIsOpenProduct(false);

	const contextValue = {
		closePopup,
		isOpenPopup,
		openPopup,
		togglePopup,
		closeProduct,
		openProduct,
		isOpenProduct,
	};
	return <PopupContext.Provider value={contextValue}>{children}</PopupContext.Provider>;
};
