export interface Category {
	category_slug: string;
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
	section_slug: string;
}

export interface Product {
	id: number;
	brand: string;
	item_number: string;
	name_ru: string;
	name_ua: string;
	category_slug: string;
	category_ua: string;
	category_en: string;
	category_ru: string;
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
