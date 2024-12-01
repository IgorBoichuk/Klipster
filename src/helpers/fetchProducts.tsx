import axios from 'axios';
import { Product } from '@/types';

const fetchAllProducts = async (): Promise<Product[] | undefined> => {
	try {
		// Використовуємо axios для запиту
		const response = await axios.get('/api/getData', {
			params: { table: 'partsitems' }, // Передача параметрів у запит
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

export default fetchAllProducts;

// interface FetchDataParams {
// 	table: string;
// }

// const fetchCategories = async <T,>({ table }: FetchDataParams): Promise<T[] | undefined> => {
// 	try {
// 		const response = await axios.get('/api/getData', {
// 			params: { table },
// 		});
// 		return response.data;
// 	} catch (error) {
// 		console.error(`Error fetching data from ${table}:`, error);
// 		return undefined;
// 	}
// };

// export default fetchCategories;
