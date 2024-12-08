import React, { Suspense, useEffect, useState } from 'react';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { Loader } from './Loader';
import { Popup } from './Popup';
import { SingleProductCrad } from './SingleProductCrad';
import { usePopup } from '@/app/providers/usePopup';
import { usePathname, useRouter } from 'next/navigation';

interface ArticlesProps {
	catData: Product[];
	currentPathLink?: string | null;
}

export const Articles: React.FC<ArticlesProps> = ({ catData }) => {
	const { openProduct, isOpenProduct, closeProduct } = usePopup(); // Отримуємо функції та стан з контексту
	const [choosenProdukt, setChoosenProdukt] = useState<Product | null>(null);

	const pathToPhoto = 'https://klipster.com.ua/';
	const router = useRouter();

	const currentPath = usePathname();
	const [currentPathLink, setCurrentPathLink] = useState(currentPath);

	useEffect(() => {
		setCurrentPathLink(currentPath);
	}, []);

	const ClickOnProdukt = (id: number, name: string): void => {
		openProduct();
		const chooseProdukt = catData.find(item => item.id === id);
		setChoosenProdukt(chooseProdukt || null);
		const formattedName = encodeURIComponent(name.trim().toLowerCase().replace(/\s+/g, '-'));
		const newPath = `${currentPathLink}/${formattedName}`;
		window.history.pushState(null, '', newPath);
	};
	const closeProductPopup = () => {
		setChoosenProdukt(null);
		closeProduct();
		router.replace(currentPathLink || '/');
	};

	return (
		<div>
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{catData.map(product => (
					<li key={product.id} onClick={() => ClickOnProdukt(product.id, product.name_ua)} className=''>
						<ProductCard
							title={product.name_ua}
							price={product.price}
							article={product.item_number}
							image={`${pathToPhoto}${product.photo}`}
						/>
					</li>
				))}
			</ul>
			{isOpenProduct && choosenProdukt && (
				<Popup
					customOverlay='absolute top-0 left-0 bg-slate-500 bg-opacity-15 backdrop-blur-md'
					currentPathLink={currentPathLink}
				>
					<Suspense fallback={<Loader />}>
						<SingleProductCrad selectedProduct={choosenProdukt} img={pathToPhoto} onClose={closeProductPopup} />
					</Suspense>
				</Popup>
			)}
		</div>
	);
};
