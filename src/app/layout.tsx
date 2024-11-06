import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/shared/components/Header';
import { Footer } from '@/shared/components/Footer';
import { PopupProvider } from './providers/PopupProvider';

export const metadata: Metadata = {
	title: 'Klipster',
	description: 'Магазин автомобільних кріплень та аксесуарів',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// return <PopupProvider>{children}</PopupProvider>
	return (
		<html lang='ua'>
			<body className=''>
				<PopupProvider>
					<Header />
					{children}
					<Footer />
				</PopupProvider>
			</body>
		</html>
	);
}
