import { Product } from '@/types';

const fetchCategoriesFromAPI = async (): Promise<Product[] | undefined> => {
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
export default fetchCategoriesFromAPI;
