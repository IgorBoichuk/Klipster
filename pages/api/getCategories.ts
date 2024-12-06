import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/lib/prisma';

// Обробник запиту
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { table } = req.query;

	// Перевірка валідності параметра table
	if (table && table !== 'categories') {
		return res.status(400).json({ error: 'Invalid table name. Only "categories" is allowed' });
	}

	try {
		// Отримуємо всі записи з таблиці "categories"
		const rows = await prisma.categories.findMany();
		// const rows = await prisma.categories;
		// console.log(rows);

		res.status(200).json(rows);
	} catch (error: unknown) {
		console.error('Error occurred:', error);
		res.status(500).json({ error: 'Failed to retrieve data', details: String(error) });
	}
}
