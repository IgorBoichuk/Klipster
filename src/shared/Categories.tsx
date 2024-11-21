'use client';
import React, { useEffect, useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { CategoryCard } from './CategoryCard';

import Clipses from '/public/galery/categories/clips.jpg';

interface Product {
	category_raitng: number;
	category_ru: string;
	category_ua: string;
	id: number;
	photo: string;
	section_raitng: number;
	section_ru: string;
	section_ua: string;
}

export const Categories = () => {
	const [sections, setSections] = useState<Product[]>([]);

	const fetchProducts = async () => {
		try {
			const response = await fetch('/api/getData?table=categories');
			const data = await response.json();

			// Перевірка, чи data є масивом
			if (Array.isArray(data)) {
				setSections(data);
			} else {
				console.error('Data is not an array', data);
			}
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	// Створення Set для унікальних section_ua
	const uniqueSections = Array.from(
		new Set(sections.map(item => item.section_ua)) // Створюємо Set для section_ua
	)
		.map(section_ua => {
			// Для кожного унікального section_ua знаходимо відповідний об'єкт
			return sections.find(item => item.section_ua === section_ua);
		})
		.filter((item): item is Product => item !== undefined); // Фільтруємо undefined, використовуючи type guard

	// Сортуємо за section_raitng
	const sortedSections = uniqueSections.sort((a, b) => a.section_raitng - b.section_raitng);

	return (
		<div className=''>
			<SectionTitle title='Розділи' />
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{sortedSections.map((item, index) => (
					<li key={index} className='h-full'>
						<CategoryCard title={item.section_ua} image={item.photo} />
					</li>
				))}
			</ul>
		</div>
	);
};
