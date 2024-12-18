'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CartItem {
	id: number; // Унікальний ідентифікатор товару
	image: StaticImageData | string;
	title: string;
	article: string;
	price: number;
	quantity: number;
}

interface CartContextType {
	partsInCart: CartItem[];
	setPartsInCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: string) => void;
	clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [partsInCart, setPartsInCart] = useState<CartItem[]>([]);
	console.log(partsInCart);

	// Ініціалізація корзини з localStorage
	useEffect(() => {
		const localStore = localStorage.getItem('cart');
		if (localStore) {
			setPartsInCart(JSON.parse(localStore));
		}
	}, []);

	// Оновлення localStorage при зміні корзини
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(partsInCart));
	}, [partsInCart]);

	// Додавання товару в корзину
	const addToCart = (item: CartItem) => {
		setPartsInCart(prev => {
			const existingItem = prev.find(cartItem => cartItem.id === item.id);
			if (existingItem) {
				// Оновлення кількості, якщо товар вже є
				return prev.map(cartItem =>
					cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
				);
			}
			return [...prev, item];
		});
	};

	// Видалення товару з корзини
	const removeFromCart = (id: string) => {
		setPartsInCart(prev => prev.filter(item => item.id !== id));
	};

	// Очищення корзини
	const clearCart = () => {
		setPartsInCart([]);
	};

	return (
		<CartContext.Provider value={{ partsInCart, setPartsInCart, addToCart, removeFromCart, clearCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = (): CartContextType => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
};
