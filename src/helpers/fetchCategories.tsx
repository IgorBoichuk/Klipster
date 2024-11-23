import { Product } from '@/types';

export const fetchCategories = async (): Promise<Product[] | undefined> => {
	try {
		const response = await fetch('/api/getData?table=categories');
		const data: Product[] = await response.json();

		if (Array.isArray(data)) {
			return data;
		} else {
			console.error('Data is not an array', data);
		}
	} catch (error) {
		console.error('Error fetching categories:', error);
	}
};
