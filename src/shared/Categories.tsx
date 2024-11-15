'use client';
import React, { useEffect, useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { CategoryCard } from './CategoryCard';

import Clipses from '../../public/images/clipses.png';

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

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('/api/getData?table=categories');
				const data = await response.json();
				setSections(data);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};
		fetchProducts();
	}, []);

	// Фільтрація унікальних за section_ua
	const uniqueSections = [
		...new Map(
			sections.map(item => [item.section_ua, item]) // Створюємо мапу з унікальними ключами
		).values(),
	];

	// Сортуємо унікальні елементи за section_raitng
	const sortedSections = uniqueSections.sort((a, b) => a.section_raitng - b.section_raitng);

	return (
		<div className=''>
			<SectionTitle title='Розділи' />
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{sortedSections.map((item, index) => (
					<li key={index} className='h-full'>
						<CategoryCard title={item.section_ua} image={Clipses} />
					</li>
				))}
			</ul>
		</div>
	);
};
