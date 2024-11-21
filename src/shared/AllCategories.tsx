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

	const fetchCategories = async () => {
		try {
			const response = await fetch('/api/getData?table=categories');
			const data = await response.json();

			// Перевірка, чи data є масивом
			if (Array.isArray(data)) {
				setCategories(data);
			} else {
				console.error('Data is not an array', data);
			}
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	// Створення Set для унікальних section_ua
	const uniqueCategories = Array.from(
		new Set(categories.map(item => item.category_ua)) // Створюємо Set для section_ua
	)
		.map(category_ua => {
			// Для кожного унікального section_ua знаходимо відповідний об'єкт
			return categories.find(item => item.category_ua === category_ua);
		})
		.filter((item): item is Product => item !== undefined); // Фільтруємо undefined, використовуючи type guard

	// Сортуємо за section_raitng
	const sortedCategories = uniqueCategories.sort((a, b) => a.category_raitng - b.category_raitng);
	return (
		<div className=''>
			<SectionTitle title='Всі категорії' />
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{[
					...new Map(
						sortedCategories
							.sort((a, b) => a.category_raitng - b.category_raitng) // Сортуємо по category_raitng
							.map(item => [item.category_ua, item]) // Створюємо пари [category_ua, item]
					).values(),
				].map((item, index) => (
					<li key={index} className='h-full'>
						<CategoryCard title={item.category_ua} image={item.photo} />
					</li>
				))}
			</ul>
		</div>
	);
};
