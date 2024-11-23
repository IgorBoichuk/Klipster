export interface Product {
	id: number;
	category_raitng: number;
	category_ua: string;
	category_en: string;
	category_ru: string;
	photo_section: string;
	section_raitng: number;
	section_ua: string;
	section_en: string;
	section_ru: string;
	categories: [];
	filteredCategories: [];
	photo_category: string;
}
