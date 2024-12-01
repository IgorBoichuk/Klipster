import React from 'react';
import { CategoryCard } from './CategoryCard';
import { Category } from '@/types'; // Використовуємо `Category`, а не `Product`
import useProducts from '@/app/hooks/useProducts';

interface AllCategoriesProps {
	filteredCategories: Category[]; // Проп для відфільтрованих категорій
}

export const AllCategories = ({ filteredCategories }: AllCategoriesProps) => {
	// Сортуємо категорії за рейтингом
	const sortedCategories = [...filteredCategories].sort((a, b) => a.category_raitng - b.category_raitng);

	// Викликаємо хук для отримання функції вибору категорії
	const { onCategoryChoose } = useProducts('');

	return (
		<div>
			<h2 className='text-2xl text-red-600'>Всі категорії</h2>
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{/* Виводимо кожну категорію */}
				{sortedCategories.map(item => (
					<li key={item.id} className='h-full'>
						<CategoryCard
							title={item.category_ua}
							image={item.photo_category}
							pathname={item.category_en}
							onClick={() => onCategoryChoose(item.category_en)} // Передаємо категорію
							isCategory
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
