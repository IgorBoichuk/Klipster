import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import './globals.css';
import { Header } from '@/shared/components/Header';
import { Footer } from '@/shared/components/Footer';
import { PopupProvider } from './providers/PopupProvider';
import { ReviewedGoods } from '@/shared/ReviewedGoods';
import Bolt from '../../public/images/bolts.png';

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
			<body className='font-sans'>
				<PopupProvider>
					<Header />
					{children}
					<ReviewedGoods image={Bolt} title={'Ви переглядали'} />
					<Footer />
				</PopupProvider>
			</body>
		</html>
	);
}
