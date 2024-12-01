export interface Category {
	id: number;
	category_en: string;
	category_ru: string;
	category_ua: string;
	section_en: string;
	section_ru: string;
	section_ua: string;
	section_raitng: number;
	category_raitng: number;
	photo_section: string;
	photo_category: string;
}

export interface Product {
	id: number;
	brand: string;
	item_number: string;
	name_ru: string;
	name_ua: string;
	category: string;
	item_type: string;
	color: string;
	installation_place: string;
	description_ru: string;
	description_ua: string;
	availability: string;
	price: string;
	photo: string;
	car_brand: string;
	car_model: string;
}

// export interface Product extends Pick<Category, 'category_ua' | 'category_en' | 'category_ru' | 'id'> {
// 	catData: Category[]; // Використовуємо Category як тип для catData
// 	brand?: string;
// 	car_brand?: string;
// 	car_model?: string;
// 	color?: string;
// 	description_ru?: string;
// 	description_ua?: string;
// 	installation_place?: string;
// 	item_number?: string;
// 	item_type?: string;
// 	name_ru?: string;
// 	name_ua?: string;
// 	photo?: string;
// 	price?: number;
// }
