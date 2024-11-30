'use client';
import React, { useEffect, useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { CategoryCard } from './CategoryCard';

import { processSections } from '@/helpers/uniqueSections';
import { Product } from '@/types';
import fetchCategoriesFromAPI from '@/helpers/fetchCategories';

export const Sections = () => {
	const [sections, setSections] = useState<Product[]>([]);

	// const fetchProducts = async () => {
	// 	try {
	// 		// Використання axios для отримання даних
	// 		const response = await axios.get('/api/getData', {
	// 			params: { table: 'partsitems' }, // Передача параметрів у запит
	// 		});

	// 		const data: Product[] = response.data;
	// 		setProducts(data);
	// 	} catch (error) {
	// 		// Axios автоматично додає більше інформації про помилку
	// 		console.error('Error fetching products:', error);
	// 	}
	// };

	useEffect(() => {
		const loadSections = async () => {
			const data = await fetchCategoriesFromAPI(); // Викликаємо функцію для отримання даних
			if (data) {
				setSections(data); // Зберігаємо дані в стейт
			}
		};
		loadSections(); // Виконуємо асинхронний виклик
	}, []);

	const sortedSections = processSections(sections);

	return (
		<div className=''>
			<SectionTitle title='Розділи' />
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{sortedSections.map((item, index) => (
					<li key={index} className='h-full'>
						<CategoryCard title={item.section_ua} image={item.photo_section} pathname={item.section_en} />
					</li>
				))}
			</ul>
		</div>
	);
};
