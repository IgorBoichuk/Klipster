import { Product } from '@/types';

export const processSections = (sections: Product[]): Product[] => {
	// Створення Set для унікальних section_ua
	const uniqueSections = Array.from(new Set(sections.map(item => item.section_ua)))
		.map(section_ua => {
			// Для кожного унікального section_ua знаходимо відповідний об'єкт
			return sections.find(item => item.section_ua === section_ua);
		})
		.filter((item): item is Product => item !== undefined); // Фільтруємо undefined, використовуючи type guard

	// Сортуємо за section_raitng
	return uniqueSections.sort((a, b) => a.section_raitng - b.section_raitng);
};
