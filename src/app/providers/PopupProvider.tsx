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
	openCart: () => void;
	closeCart: () => void;
	isOpenCart: boolean;
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
	openCart: () => {},
	closeCart: () => {},
	isOpenProduct: false,
	isOpenCart: false,
});
export const PopupProvider = ({ children }: PopupProps) => {
	const [isOpenPopup, setIsOpenPopup] = useState(false);
	const [isOpenProduct, setIsOpenProduct] = useState(false);
	const [isOpenCart, setIsOpenCart] = useState(false);

	const closePopup = () => setIsOpenPopup(false);
	const openPopup = () => setIsOpenPopup(true);
	const togglePopup = () => setIsOpenPopup(prev => !prev);
	const openProduct = () => setIsOpenProduct(true);
	const closeProduct = () => setIsOpenProduct(false);
	const openCart = () => setIsOpenCart(true);
	const closeCart = () => setIsOpenCart(false);

	const contextValue = {
		closePopup,
		isOpenPopup,
		openPopup,
		togglePopup,
		closeProduct,
		openProduct,
		isOpenProduct,
		isOpenCart,
		setIsOpenCart,
		openCart,
		closeCart,
	};
	return <PopupContext.Provider value={contextValue}>{children}</PopupContext.Provider>;
};
