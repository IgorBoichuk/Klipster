import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import './globals.css';
import { Header } from '@/shared/components/Header';
import { Footer } from '@/shared/components/Footer';
import { PopupProvider } from './providers/PopupProvider';
import { ReviewedGoods } from '@/shared/ReviewedGoods';
import Bolt from '../../public/images/bolts.png';
import { Container } from '@/shared/Container';
import { fetchPartsfromBase } from '@/hooks/getData';

const lora = Lora({
	subsets: ['latin'],
	variable: '--font-lora',
});

export const metadata: Metadata = {
	title: 'Klipster',
	description: 'Магазин автомобільних кріплень та аксесуарів',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const blogPosts = await fetchPartsfromBase();
	console.log(blogPosts);

	return (
		<html lang='ua' className={` ${lora.variable}  font-sans dark`}>
			<head>
				<link rel='icon' href='/favicon.svg' sizes='any' />
			</head>
			<body className='font-sans'>
				<PopupProvider>
					<Header />
					<Container>
						{children}
						<ReviewedGoods image={Bolt} title={'Ви переглядали'} />
					</Container>
					<Footer />
				</PopupProvider>
			</body>
		</html>
	);
}
