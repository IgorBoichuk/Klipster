'use client';
import React, { useEffect, useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { CategoryCard } from './CategoryCard';
import { processSections } from '@/helpers/uniqueSections';
import { Category } from '@/types'; // Використовуємо тип `Category`
import fetchCategories from '@/helpers/fetchCategories';

export const Sections = () => {
	// Стан для збереження розділів (sections)
	const [sections, setSections] = useState<Category[]>([]);

	useEffect(() => {
		// Завантаження розділів із бази даних
		const loadSections = async () => {
			const data = await fetchCategories<Category>({ table: 'categories' }); // Завантажуємо категорії
			if (data) {
				setSections(data); // Зберігаємо дані в стан
			}
		};
		loadSections(); // Виконуємо асинхронний виклик
	}, []);

	// Відсортовані розділи
	const sortedSections = processSections(sections);

	return (
		<div>
			<SectionTitle title='Розділи' />
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{/* Мапимо відсортовані розділи */}
				{sortedSections.map(item => (
					<li key={item.id} className='h-full'>
						<CategoryCard title={item.section_ua} image={item.photo_section} pathname={item.section_en} />
					</li>
				))}
			</ul>
		</div>
	);
};
