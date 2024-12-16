import axios, { AxiosError } from 'axios';
import { Product } from '@/types';

interface FetchProductsResponse {
	products: Product[]; // Масив товарів
	totalCount: number; // Загальна кількість товарів для пагінації
}

// Тип для структури response.data
interface ErrorResponse {
	error: string;
	// інші можливі властивості відповіді
}

const fetchProducts = async (category_slug: string, page: number, pageSize: number): Promise<FetchProductsResponse> => {
	try {
		// Формуємо параметри для запиту

		const params = {
			table: 'partsitems',
			category_slug,
			page,
			pageSize,
		};

		console.log(params);
		const response = await axios.get('/api/getProducts', { params });

		const data = response.data;

		// Перевірка структури відповіді
		if (data && Array.isArray(data.products) && typeof data.totalCount === 'number') {
			return { products: data.products, totalCount: data.totalCount };
		} else {
			throw new Error('Invalid response format');
		}
	} catch (error: unknown) {
		// Перевірка чи є це AxiosError
		if (axios.isAxiosError(error)) {
			// Тепер можемо бути впевненими, що error має тип AxiosError
			const axiosError = error as AxiosError<ErrorResponse>;

			// Перевірка, чи є в відповіді error
			const errorMessage = axiosError.response?.data?.error || 'Failed to fetch products';
			console.error('Error fetching products:', errorMessage);

			// Кидаємо помилку далі
			throw new Error(errorMessage);
		} else if (error instanceof Error) {
			// Для інших помилок JavaScript (наприклад, стандартні помилки)
			console.error('Unexpected error:', error.message);
			throw new Error('An unexpected error occurred');
		} else {
			// Якщо помилка має невідомий тип
			console.error('Unknown error:', error);
			throw new Error('An unknown error occurred');
		}
	}
};

export default fetchProducts;
