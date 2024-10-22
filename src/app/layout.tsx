import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/shared/Header';
import { Footer } from '@/shared/Footer';

export const metadata: Metadata = {
	title: 'Klipster',
	description: 'Магазин автомобільних кріплень та аксесуарів',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ua'>
			<body className=''>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
