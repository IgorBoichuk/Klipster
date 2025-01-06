import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	// Перевіряємо метод запиту
	if (req.method !== 'GET') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	// Отримуємо ID товару з параметрів запиту
	const { id } = req.query;

	// Перевірка валідності ID
	if (!id || typeof id !== 'string') {
		return res.status(400).json({ error: 'ID is required and must be a valid string.' });
	}

	try {
		// Запит до бази даних для отримання товару за ID
		const product = await prisma.partsitems.findUnique({
			where: {
				id: Number(id), // Перетворення ID в число
			},
		});

		// Якщо товар не знайдено
		if (!product) {
			return res.status(404).json({ error: 'Product not found' });
		}

		// Повертаємо знайдений товар
		res.status(200).json(product);
	} catch (error) {
		console.error('Error occurred while fetching product:', error);
		res.status(500).json({ error: 'Failed to retrieve product' });
	}
}
