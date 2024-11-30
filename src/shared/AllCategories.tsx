import React from 'react';
import { CategoryCard } from './CategoryCard';
import { Product } from '@/types';

interface AllCategoriesProps {
	filteredCategories: Product[]; // Проп для відфільтрованих категорій
}

export const AllCategories = ({ filteredCategories }: AllCategoriesProps) => {
	const sortedCategories = [...filteredCategories].sort((a, b) => a.category_raitng - b.category_raitng);

	return (
		<div>
			<h2 className=' text-2xl text-red-600'>Всі категорії</h2>
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{sortedCategories.map((item, index) => (
					<li key={index} className='h-full'>
						<CategoryCard title={item.category_ua} image={item.photo_category} pathname={'/165654'} isCategory />
					</li>
				))}
			</ul>
		</div>
	);
};
