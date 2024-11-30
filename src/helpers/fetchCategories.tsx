// import { Product } from '@/types';

// export const fetchCategories = async (): Promise<Product[] | undefined> => {
// 	try {
// 		const response = await fetch('/api/getData?table=categories');
// 		const data: Product[] = await response.json();

// 		if (Array.isArray(data)) {
// 			return data;
// 		} else {
// 			console.error('Data is not an array', data);
// 		}
// 	} catch (error) {
// 		console.error('Error fetching categories:', error);
// 	}
// };

import axios from 'axios';
import { Product } from '@/types';

const fetchCategoriesFromAPI = async (): Promise<Product[] | undefined> => {
	try {
		// Використовуємо axios для запиту
		const response = await axios.get('/api/getData', {
			params: { table: 'categories' }, // Передача параметрів у запит
		});

		const data: Product[] = response.data;

		if (Array.isArray(data)) {
			return data;
		} else {
			console.error('Data is not an array', data);
		}
	} catch (error) {
		// Axios автоматично додає більше деталей у помилки
		console.error('Error fetching categories:', error);
	}
};

export default fetchCategoriesFromAPI;
