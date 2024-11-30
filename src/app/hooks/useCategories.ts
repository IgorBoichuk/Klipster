import { useEffect, useState } from 'react';
import { Product } from '@/types';
import fetchCategories from '@/helpers/fetchCategories';

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
		const loadCategories = async () => {
			const data = await fetchCategories(); // Викликаємо функцію для отримання даних
			if (data) {
				setCategories(data);
				setFilteredCategories(sectionFromUrl ? data.filter(item => item.section_en === sectionFromUrl) : data);
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
		setFilteredCategories(categories.filter(item => item.section_ua === section));
		console.log(categories);
	};

	return { categories, filteredCategories, sections, selectedSection, handleSectionChange, sectionFromUrl };
};

export default useCategories;
