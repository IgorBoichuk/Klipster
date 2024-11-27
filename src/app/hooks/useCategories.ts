import { useEffect, useState } from 'react';
import { Product } from '@/types';
import fetchCategoriesFromAPI from '../helpers/fetchCategories';

const useCategories = (sectionFromUrl: string | null) => {
	const [categories, setCategories] = useState<Product[]>([]);
	const [filteredCategories, setFilteredCategories] = useState<Product[]>([]);
	const [sections, setSections] = useState<string[]>([]);
	const [selectedSection, setSelectedSection] = useState<string | null>(sectionFromUrl);

	useEffect(() => {
		const getCategories = async () => {
			const data = await fetchCategoriesFromAPI();
			if (data) {
				setCategories(data);
				setFilteredCategories(sectionFromUrl ? data.filter(item => item.section_en === sectionFromUrl) : data);
				setSections(Array.from(new Set(data.map(item => item.section_ua))));
				if (sectionFromUrl) setSelectedSection(sectionFromUrl);
			}
		};
		getCategories();
	}, [sectionFromUrl]);

	const handleSectionChange = (section: string) => {
		setSelectedSection(section);
		setFilteredCategories(categories.filter(item => item.section_ua === section));
	};

	return { categories, filteredCategories, sections, selectedSection, handleSectionChange };
};

export default useCategories;
