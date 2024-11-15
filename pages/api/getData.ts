import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

// Функція для з'єднання з базою даних
const connectToDatabase = async () => {
	try {
		return await mysql.createConnection({
			host: process.env.DB_HOST, // Адреса сервера БД
			user: process.env.DB_USER, // Ваш логін
			password: process.env.DB_PASS, // Ваш пароль
			database: process.env.DB_NAME, // Назва бази даних
			port: parseInt(process.env.DB_PORT || '3306', 10),
		});
	} catch (error) {
		console.error('Error connecting to database:', error);
		throw error; // Викидаємо помилку, щоб вона потрапила в основний блок
	}
};

// Обробник запиту
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const connection = await connectToDatabase();
		const [rows] = await connection.execute('SELECT * FROM partsitems');
		await connection.end();

		res.status(200).json(rows); // Повертаємо отримані дані
	} catch (error) {
		console.error('Error occurred:', error);
		res.status(500).json({ error: 'Failed to retrieve products' }); // Обробка помилок
	}
}
