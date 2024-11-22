import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		// Додаємо домен, з якого завантажуються зображення
		domains: ['codex-dev.pro'],
		// Якщо хочете, щоб Next.js оптимізував зображення, цей рядок можна видалити.
		unoptimized: true,
	},
	remotePatterns: [
		{
			protocol: 'https',
			hostname: 'codex-dev.pro',
			pathname: '/**', // Усі підшляхи
		},
	],
};

export default nextConfig;
