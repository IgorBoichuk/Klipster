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
		const loadCategories = async () => {
			// Вказуємо, що ми працюємо з типом Category
			const data = await fetchCategories<Category>({ table: 'categories' });
			if (data) {
				setCategories(data);

				// Фільтруємо категорії за параметром URL
				setFilteredCategories(sectionFromUrl ? data.filter(item => item.section_en === sectionFromUrl) : data);

				// Генеруємо унікальні секції
				const uniqueSections = Array.from(
					new Map(
						data.map(item => [item.section_ua, { section_ua: item.section_ua, section_en: item.section_en }])
					).values()
				);
				setSections(uniqueSections);
			}
		};
		loadCategories();
	}, [sectionFromUrl]);

	const handleSectionChange = (section: string) => {
		setSelectedSection(section);

		// Фільтруємо категорії відповідно до вибраної секції
		setFilteredCategories(categories.filter(item => item.section_ua === section));
		console.log(categories);
	};

	return { categories, filteredCategories, sections, selectedSection, handleSectionChange, sectionFromUrl };
};

export default useCategories;
