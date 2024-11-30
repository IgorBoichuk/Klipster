import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '@/types';

interface Section {
	section_ua: string;
	section_en: string;
}

const useCategories = (sectionFromUrl: string | null) => {
	const [categories, setCategories] = useState<Product[]>([]);
	const [filteredCategories, setFilteredCategories] = useState<Product[]>([]);
	const [sections, setSections] = useState<Section[]>([]);
	const [selectedSection, setSelectedSection] = useState<string | null>(sectionFromUrl);

	useEffect(() => {
		const getCategories = async () => {
			try {
				// Запит через axios
				const response = await axios.get('/api/getData', {
					params: { table: 'categories' }, // Передаємо назву таблиці
				});

				const data: Product[] = response.data;

				if (Array.isArray(data)) {
					setCategories(data);

					// Унікальні секції
					const uniqueSections = Array.from(
						new Map(
							data.map(item => [item.section_ua, { section_ua: item.section_ua, section_en: item.section_en }])
						).values()
					);
					setSections(uniqueSections);

					// Фільтр категорій за параметром з URL
					setFilteredCategories(sectionFromUrl ? data.filter(item => item.section_en === sectionFromUrl) : data);

					if (sectionFromUrl) setSelectedSection(sectionFromUrl);
				} else {
					console.error('Fetched data is not an array:', data);
				}
			} catch (error) {
				console.error('Error fetching categories:', error);
			}
		};

		getCategories();
	}, [sectionFromUrl]);

	const handleSectionChange = (section: string) => {
		setSelectedSection(section);
		setFilteredCategories(categories.filter(item => item.section_ua === section));
		console.log(categories);
	};

	return { categories, filteredCategories, sections, selectedSection, handleSectionChange, sectionFromUrl };
};

export default useCategories;
