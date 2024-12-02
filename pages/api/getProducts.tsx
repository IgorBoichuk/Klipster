import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/lib/prisma';

// Обробник запиту

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { table, category, page = 1, pageSize = 60 } = req.query;

	// Перевірка валідності параметра table
	if (!table || typeof table !== 'string') {
		return res.status(400).json({ error: 'Table name is required and must be a string.' });
	}

	if (!category || typeof category !== 'string') {
		return res.status(400).json({ error: 'Category name is required and must be a string.' });
	}

	const pageNumber = parseInt(page as string, 10);
	const pageSizeNumber = parseInt(pageSize as string, 10);

	if (isNaN(pageNumber) || isNaN(pageSizeNumber) || pageNumber < 1 || pageSizeNumber < 1) {
		return res
			.status(400)
			.json({ error: 'Invalid pagination parameters. Page and pageSize must be positive integers.' });
	}

	// Обмеження на максимальний розмір сторінки
	const MAX_PAGE_SIZE = 100;
	if (pageSizeNumber > MAX_PAGE_SIZE) {
		return res.status(400).json({ error: `Page size cannot exceed ${MAX_PAGE_SIZE}.` });
	}

	const allowedTables = ['partsitems', 'users', 'categories']; // Список дозволених таблиць
	if (!allowedTables.includes(table)) {
		return res.status(400).json({ error: 'Invalid table name. Table is not in the allowed list.' });
	}

	try {
		// Використовуємо Prisma для отримання загальної кількості записів у категорії
		const totalCount = await prisma.partsitems.count({
			where: {
				category: category,
			},
		});

		// Використовуємо Prisma для отримання товарів з фільтром по категорії та пагінацією
		const products = await prisma.partsitems.findMany({
			where: {
				category: category,
			},
			skip: (pageNumber - 1) * pageSizeNumber, // OFFSET
			take: pageSizeNumber, // LIMIT
		});

		// Повертаємо результат
		res.status(200).json({
			products,
			totalCount,
			page: pageNumber,
			pageSize: pageSizeNumber,
		});
	} catch (error: unknown) {
		console.error('Error occurred:', error);
		res.status(500).json({ error: 'Failed to retrieve data', details: String(error) });
	}
}
