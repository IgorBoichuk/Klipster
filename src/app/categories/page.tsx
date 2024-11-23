'use client';
import React, { useEffect, useState } from 'react';
import { RecommendedProducts } from '@/shared/RecommendedProducts';
import Bolt from '../../../public/images/bolts.png';
import { AllCategories } from '@/shared/AllCategories';
import FilterBySection from '@/shared/FilterBySection';
import { fetchCategories } from '@/helpers/fetchCategories';
import { Product } from '@/types';

const Categories = () => {
	const [categories, setCategories] = useState<Product[]>([]); // Стан для категорій
	const [filteredCategories, setFilteredCategories] = useState<Product[]>([]); // Відфільтровані категорії
	const [sections, setSections] = useState<string[]>([]); // Стан для секцій (масив рядків)
	const [selectedSection, setSelectedSection] = useState<string | null>(null); // Стан для вибраної секції

	// Завантаження категорій при завантаженні компонента
	useEffect(() => {
		const getCategories = async () => {
			const data = await fetchCategories(); // Викликаємо функцію fetchCategories з окремого файлу
			if (data) {
				setCategories(data);
				setFilteredCategories(data); // Спочатку всі категорії
				const uniqueSections = Array.from(new Set(data.map(item => item.section_ua))); // Унікальні секції
				setSections(uniqueSections); // Зберігаємо унікальні секції в стан
			}
		};

		getCategories(); // Завантажуємо категорії при завантаженні компонента
	}, []);

	// Фільтрація категорій за секцією
	const handleSectionChange = (section: string) => {
		setSelectedSection(section);
		if (section) {
			setFilteredCategories(categories.filter(category => category.section_ua === section)); // Фільтруємо за секцією
		} else {
			setFilteredCategories(categories); // Якщо секція не вибрана, показуємо всі категорії
		}
	};

	return (
		<div>
			<FilterBySection sections={sections} selectedSection={selectedSection} onSelectSection={handleSectionChange} />
			<AllCategories filteredCategories={filteredCategories} />
			<RecommendedProducts image={Bolt} title={'Рекомендовані товари'} />
		</div>
	);
};

export default Categories;
