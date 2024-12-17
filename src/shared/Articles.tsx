import React, { useEffect, useState } from 'react';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { Popup } from './Popup';
import { SingleProductCrad } from './SingleProductCrad';
import { usePopup } from '@/app/hooks/usePopup';
import { usePathname, useRouter } from 'next/navigation';
import { useCategory } from '@/app/providers/CategoryContext';

interface ArticlesProps {
	catData: Product[];
	currentPathLink?: string | null;
}

export const Articles: React.FC<ArticlesProps> = ({ catData }) => {
	const { setCategoryName, categoryName } = useCategory();
	const { openProduct, isOpenProduct, closeProduct } = usePopup(); // Отримуємо функції та стан з контексту
	const [choosenProdukt, setChoosenProdukt] = useState<Product | null>(null);

	const pathToPhoto = 'https://klipster.com.ua/';
	const router = useRouter();

	const currentPath = usePathname();
	const [currentPathLink, setCurrentPathLink] = useState(currentPath);

	const CerrentCategoryName = () => {
		const currentname = catData[0].category_ua;
		setCategoryName(currentname);
	};

	useEffect(() => {
		categoryName || CerrentCategoryName();
	});

	const ClickOnProdukt = (id: number, name: string): void => {
		openProduct();
		const chooseProdukt = catData.find(item => item.id === id);
		setChoosenProdukt(chooseProdukt || null);
		const formattedName = name
			.trim()
			.toLowerCase()
			.replace(/[^a-zа-я0-9\s]/gi, '')
			.replace(/\s+/g, '-');
		const newPath = `${currentPathLink}/${formattedName}`;
		window.history.pushState(null, '', newPath);
		setCurrentPathLink(currentPath);
	};
	const closeProductPopup = () => {
		setChoosenProdukt(null);
		closeProduct();
		router.replace(currentPathLink || '/');
	};

	return (
		<div>
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center'>
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
					<SingleProductCrad selectedProduct={choosenProdukt} img={pathToPhoto} onClose={closeProductPopup} />
				</Popup>
			)}
		</div>
	);
};
