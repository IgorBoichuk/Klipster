'use client';
import React, { useEffect, useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { CategoryCard } from './CategoryCard';
import { fetchCategories } from '@/helpers/fetchCategories';
import { processSections } from '@/helpers/uniqueSections';
import { Product } from '@/types';

export const Sections = () => {
	const [sections, setSections] = useState<Product[]>([]);

	useEffect(() => {
		const loadSections = async () => {
			const data = await fetchCategories(); // Викликаємо функцію для отримання даних
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
						<CategoryCard title={item.section_ua} pathname={item.section_en} image={item.photo_section} />
					</li>
				))}
			</ul>
		</div>
	);
};
