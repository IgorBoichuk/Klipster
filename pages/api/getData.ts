import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

// Функція для з'єднання з базою даних
const connectToDatabase = async () => {
	return await mysql.createConnection({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		port: parseInt(process.env.DB_PORT || '3306', 10),
	});
};

// Обробник запиту
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { table } = req.query;
	console.log('Table:', table);

	// Перевірка валідності параметра table
	if (!table || typeof table !== 'string') {
		return res.status(400).json({ error: 'Table name is required' });
	}

	const allowedTables = ['partsitems', 'users'];
	if (!allowedTables.includes(table)) {
		return res.status(400).json({ error: 'Invalid table name' });
	}

	try {
		const connection = await connectToDatabase();

		// Виконання SQL-запиту
		const query = `SELECT * FROM ${mysql.escapeId(table)}`;
		const [rows] = await connection.execute(query);

		await connection.end();

		res.status(200).json(rows);
	} catch (error: any) {
		console.error('Error occurred:', error);
		res.status(500).json({ error: 'Failed to retrieve data', details: error.message });
	}
}
