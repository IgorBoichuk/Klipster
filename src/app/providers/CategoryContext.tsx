'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CategoryContextType {
	categorySlug: string | null;
	setCategorySlug: (category: string | null) => void;
	categoryName: string | null;
	setCategoryName: (category: string | null) => void;
	sectionName: string | null;
	setSectionName: (section: string | null) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
	const [categorySlug, setCategorySlug] = useState<string | null>(null);
	const [categoryName, setCategoryName] = useState<string | null>(null);
	const [sectionName, setSectionName] = useState<string | null>(null);

	return (
		<CategoryContext.Provider
			value={{ categorySlug, setCategorySlug, categoryName, setCategoryName, sectionName, setSectionName }}
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
