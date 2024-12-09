'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; // Для роботи з маршрутом
import { CategoryCard } from './CategoryCard';
import { Category } from '@/types';
import { useCategory } from '@/app/providers/CategoryContext';

interface AllCategoriesProps {
	filteredCategories: Category[];
}

export const AllCategories = ({ filteredCategories }: AllCategoriesProps) => {
	const sortedCategories = [...filteredCategories].sort((a, b) => a.category_raitng - b.category_raitng);
	const router = useRouter(); // Ініціалізуємо роутер
	const { setCategory } = useCategory();

	const handleCategoryClick = (categoryNameEn: string, categoryNameUa: string) => {
		// Перенаправляємо до сторінки з вибраною категорією
		setCategory(categoryNameUa);
		router.push(`/category?category=${categoryNameEn}`);
	};

	return (
		<div>
			<h2 className='text-2xl text-red-600'>Всі категорії</h2>
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{sortedCategories.map(item => (
					<li key={item.id} className='h-full'>
						<CategoryCard
							title={item.category_ua}
							image={item.photo_category}
							pathname={item.category_en}
							onClick={() => handleCategoryClick(item.category_en, item.category_ua)} // Перенаправляємо за категорією
							isCategory
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
