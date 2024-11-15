'use client';
import React from 'react';
import { CategoryCard } from './CategoryCard';
import Bolt from '../../public/images/bolts.png';

import { SectionTitle } from './SectionTitle';
import { useEffect, useState } from 'react';

interface Product {
	category_raitng: number;
	category_ru: string;
	category_ua: string;
	id: number;
	photo: string;
	section_raitng: number;
	section_ru: string;
	section_ua: string;

	// Додайте інші поля за необхідністю
}

export const AllCategories = () => {
	const [categories, setCategories] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('/api/getData?table=categories');

				const data = await response.json();
				console.log(data);
				setCategories(data);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};
		fetchProducts();
	}, []);
	return (
		<div className=''>
			<SectionTitle title='Всі категорії' />
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{categories.map((item, index) => (
					<li key={index} className='h-full'>
						<CategoryCard title={item.category_ua} image={Bolt} />
					</li>
				))}
			</ul>
		</div>
	);
};
