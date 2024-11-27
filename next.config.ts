import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		// Додаємо домен, з якого завантажуються зображення
		domains: ['codex-dev.pro'],
		// Якщо хочете, щоб Next.js оптимізував зображення, цей рядок можна видалити.
		unoptimized: true,
	},
	env: {
		DB_HOST: process.env.DB_HOST,
		DB_USER: process.env.DB_USER,
		DB_PASS: process.env.DB_PASS,
		DB_NAME: process.env.DB_NAME,
		DB_PORT: process.env.DB_PORT,
	},
	remotePatterns: [
		{
			protocol: 'https',
			hostname: 'codex-dev.pro',
			pathname: '/**', // Усі підшляхи
		},
	],
	// output: 'export',
	// output: 'standalone',
};

export default nextConfig;
