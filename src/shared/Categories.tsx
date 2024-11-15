'use client';
import React, { useEffect, useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { CategoryCard } from './CategoryCard';
import Bolt from '../../public/images/bolts.png';
import Bolts from '../../public/images/boltstt.png';
import Clips from '../../public/images/clips.jpg';
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

	return (
		<div className=''>
			<SectionTitle title='Розділи' />
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{[
					...new Map(
						sections
							.sort((a, b) => a.section_raitng - b.section_raitng) // Сортуємо за section_raitng
							.map(item => [item.section_ua, item]) // Створюємо пари [section_ua, item]
					).values(),
				].map((item, index) => (
					<li key={index} className='h-full'>
						<CategoryCard title={item.section_ua} image={Clipses} />
					</li>
				))}
			</ul>
		</div>
	);
};
