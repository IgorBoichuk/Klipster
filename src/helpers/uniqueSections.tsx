import { Category } from '@/types'; // Використовуємо тип Category замість Product

// Функція для обробки секцій (категорій)
export const processSections = (sections: Category[]): Category[] => {
	// Створення Set для унікальних section_ua
	const uniqueSections = Array.from(new Set(sections.map(item => item.section_ua)))
		.map(section_ua => {
			// Для кожного унікального section_ua знаходимо відповідний об'єкт
			return sections.find(item => item.section_ua === section_ua);
		})
		.filter((item): item is Category => item !== undefined); // Фільтруємо undefined, використовуючи type guard

	// Сортуємо за section_raitng
	return uniqueSections.sort((a, b) => a.section_raitng - b.section_raitng);
};
