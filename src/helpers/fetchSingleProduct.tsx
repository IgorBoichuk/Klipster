import axios, { AxiosError } from 'axios';
import { Product } from '@/types';

// Тип для помилки
interface ErrorResponse {
	error: string;
}

const fetchSingleProduct = async (category_slug: string, id: number): Promise<Product> => {
	try {
		const params = {
			table: 'partsitems',
			category_slug,
			id,
		};

		// Запит з типом Product
		const response = await axios.get<Product>('/api/getSingleProduct', { params });
		const data = response.data;

		// Повернення даних
		if (data) {
			return data;
		} else {
			throw new Error('Invalid response format');
		}
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError<ErrorResponse>;
			const errorMessage = axiosError.response?.data?.error || 'Failed to fetch product';
			console.error('Error fetching product:', errorMessage);
			throw new Error(errorMessage);
		} else if (error instanceof Error) {
			console.error('Unexpected error:', error.message);
			throw new Error('An unexpected error occurred');
		} else {
			console.error('Unknown error:', error);
			throw new Error('An unknown error occurred');
		}
	}
};

export default fetchSingleProduct;
