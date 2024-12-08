import { useEffect, useState } from 'react';
import { Category } from '@/types'; // Використовуємо тип Category
import fetchCategories from '@/helpers/fetchCategories';

interface Section {
	section_ua: string;
	section_en: string;
}

const useCategories = (sectionFromUrl: string | null) => {
	// Замість Product використовуємо Category
	const [categories, setCategories] = useState<Category[]>([]);
	const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
	const [sections, setSections] = useState<Section[]>([]);
	const [selectedSection, setSelectedSection] = useState<string | null>(sectionFromUrl);

	useEffect(() => {
		// Завантаження категорій асинхронно
		const loadCategories = async () => {
			const data = await fetchCategories<Category>({ table: 'categories' });
			if (data) {
				setCategories(data);

				// Якщо є секція в URL, фільтруємо категорії
				const filtered = sectionFromUrl ? data.filter(item => item.section_en === sectionFromUrl) : data;
				setFilteredCategories(filtered);

				// Генерація унікальних секцій
				const uniqueSections = Array.from(
					new Map(data.map(item => [item.section_ua, { section_ua: item.section_ua, section_en: item.section_en }]))
				).map(([_, value]) => value);
				setSections(uniqueSections);
			}
		};

		loadCategories();
	}, [sectionFromUrl]);

	const handleSectionChange = (section: string) => {
		setSelectedSection(section);

		// Фільтруємо категорії відповідно до вибраної секції
		const filtered = categories.filter(item => item.section_ua === section);
		setFilteredCategories(filtered);
	};

	return { categories, filteredCategories, sections, selectedSection, handleSectionChange, sectionFromUrl };
};

export default useCategories;
