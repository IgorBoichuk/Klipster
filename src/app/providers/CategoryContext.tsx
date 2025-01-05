'use client';
import { Product } from '@/types';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CategoryContextType {
	categorySlug: string | null;
	setCategorySlug: (category: string | null) => void;
	categoryName: string | null;
	setCategoryName: (category: string | null) => void;
	sectionName: string | null;
	setSectionName: (section: string | null) => void;
	choosenProdukt: Product | null;
	setChoosenProdukt: (product: Product | null) => void;
	pathToPhoto: string;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
	const [categorySlug, setCategorySlug] = useState<string | null>(null);
	const [categoryName, setCategoryName] = useState<string | null>(null);
	const [sectionName, setSectionName] = useState<string | null>(null);
	const [choosenProdukt, setChoosenProdukt] = useState<Product | null>(null);
	const pathToPhoto = 'https://klipster.com.ua/';

	return (
		<CategoryContext.Provider
			value={{
				categorySlug,
				setCategorySlug,
				categoryName,
				setCategoryName,
				sectionName,
				setSectionName,
				choosenProdukt,
				setChoosenProdukt,
				pathToPhoto,
			}}
		>
			{children}
		</CategoryContext.Provider>
	);
};

export const useCategory = (): CategoryContextType => {
	const context = useContext(CategoryContext);
	if (!context) {
		throw new Error('useCategory must be used within a CategoryProvider');
	}
	return context;
};
