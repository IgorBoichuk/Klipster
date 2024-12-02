import axios from 'axios';
import { Product } from '@/types';

interface FetchProductsResponse {
	products: Product[]; // Масив товарів
	totalCount: number; // Загальна кількість товарів для пагінації
}

const fetchProducts = async (category: string, page: number, pageSize: number): Promise<FetchProductsResponse> => {
	console.log(category);

	try {
		// Формуємо параметри для запиту
		const params = {
			table: 'partsitems',
			category,
			page,
			pageSize,
		};

		const response = await axios.get('/api/getProducts', { params });

		const data = response.data;

		// Перевірка структури відповіді
		if (data && Array.isArray(data.products) && typeof data.totalCount === 'number') {
			return { products: data.products, totalCount: data.totalCount };
		} else {
			throw new Error('Invalid response format');
		}
	} catch (error: any) {
		console.error('Error fetching products:', error.message);
		// Кидаємо помилку далі, щоб обробити її на рівні, де викликається `fetchProducts`
		throw new Error(error.response?.data?.error || 'Failed to fetch products');
	}
};

export default fetchProducts;
