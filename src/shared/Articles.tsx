import React, { useContext, useState } from 'react';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { Loader } from './Loader';
import { Popup } from './Popup';
import { SingleProductCrad } from './SingleProductCrad';
import { PopupContext } from '@/app/providers/PopupProvider';

interface ArticlesProps {
	catData: Product[];
	isLoading: boolean;
}

export const Articles: React.FC<ArticlesProps> = ({ catData, isLoading }) => {
	const popupContext = useContext(PopupContext);

	if (!popupContext) {
		throw new Error('PopupContext must be used within a PopupProvider');
	}

	const { openProduct } = popupContext;
	const [isOpenProduct, setIsOpenProduct] = useState<Product | null>(null);

	const pathToPhoto = 'https://codex-dev.pro/';

	const ClickOnProdukt = (id: number): void => {
		openProduct();
		const chooseProdukt = catData.find(item => item.id === id);
		setIsOpenProduct(chooseProdukt || null);
	};

	return (
		<div className='App'>
			<ul className='relative grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{catData.map(product => (
					<li key={product.id} onClick={() => ClickOnProdukt(product.id)} className='h-full'>
						<ProductCard
							title={product.name_ua}
							price={product.price}
							article={product.item_number}
							image={`${pathToPhoto}${product.photo}`}
						/>
					</li>
				))}
			</ul>

			{isOpenProduct && isOpenProduct && (
				<Popup customOverlay='absolute top-0 left-0 w-full h-full bg-slate-500 bg-opacity-15 backdrop-blur-md max-full shadow-[5px_10px_30px_0px_rgba(187,187,211,0.50)]'>
					<SingleProductCrad selectedProduct={isOpenProduct} img={pathToPhoto} />
				</Popup>
			)}

			{isLoading && <Loader />}
		</div>
	);
};
