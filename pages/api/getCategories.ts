import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/lib/prisma';

// Обробник запиту
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { table } = req.query;

	// Перевірка валідності параметра table
	if (!table || typeof table !== 'string') {
		return res.status(400).json({ error: 'Table name is required' });
	}

	const allowedTables = ['partsitems', 'users', 'categories']; // список дозволених таблиць
	if (!allowedTables.includes(table)) {
		return res.status(400).json({ error: 'Invalid table name' });
	}

	try {
		// Використовуємо Prisma для отримання всіх записів із відповідної таблиці
		let rows;

		if (table === 'partsitems') {
			rows = await prisma.partsitems.findMany();
		} else if (table === 'users') {
			rows = await prisma.users.findMany();
		} else if (table === 'categories') {
			rows = await prisma.categories.findMany();
		}

		res.status(200).json(rows);
	} catch (error: unknown) {
		console.error('Error occurred:', error);
		res.status(500).json({ error: 'Failed to retrieve data', details: String(error) });
	}
}
