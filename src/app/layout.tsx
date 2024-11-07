import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import './globals.css';
import { Header } from '@/shared/components/Header';
import { Footer } from '@/shared/components/Footer';
import { PopupProvider } from './providers/PopupProvider';

const lora = Lora({
	subsets: ['latin'],
	variable: '--font-lora',
});

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
		<html lang='ua' className={` ${lora.variable}  font-sans dark`}>
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
