'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // Використовуємо для доступу до параметрів URL
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

	// Отримуємо параметри з URL
	const searchParams = useSearchParams();
	const sectionFromUrl = searchParams?.get('section'); // Отримуємо значення параметра "section"

	// Завантаження категорій при завантаженні компонента
	useEffect(() => {
		const getCategories = async () => {
			const data = await fetchCategories(); // Викликаємо функцію fetchCategories з окремого файлу

			if (data) {
				setCategories(data);
				setFilteredCategories(data); // Спочатку всі категорії
				const uniqueSections = Array.from(new Set(data.map(item => item.section_ua))); // Унікальні секції
				setSections(uniqueSections); // Зберігаємо унікальні секції в стан

				// Якщо в URL є секція, фільтруємо категорії відразу
				if (sectionFromUrl) {
					setSelectedSection(sectionFromUrl);
					setFilteredCategories(data.filter(category => category.section_en === sectionFromUrl));
				}
			}
		};

		getCategories(); // Завантажуємо категорії при завантаженні компонента
	}, []); // Список залежностей пустий, тому викликається один раз при завантаженні компонента

	// Фільтрація категорій за секцією
	const handleSectionChange = (section: string) => {
		setSelectedSection(section);
		// Оновлюємо URL при виборі секції
		window.history.pushState(null, '', `?section=${section}`);

		// Фільтруємо категорії
		setFilteredCategories(categories.filter(category => category.section_ua === section));
	};

	return (
		<div>
			<FilterBySection
				sections={sections}
				selectedSection={selectedSection}
				onSelectSection={handleSectionChange}
				filteredCategories={filteredCategories}
			/>
			<AllCategories filteredCategories={filteredCategories} />
			<RecommendedProducts image={Bolt} title={'Рекомендовані товари'} />
		</div>
	);
};

export default Categories;
