import React from 'react';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { Loader } from './Loader';
import { Popup } from './Popup';
import { SingleProductCrad } from './SingleProductCrad';

interface ArticlesProps {
	catData: Product[];
	isLoading: boolean;
}

export const Articles = ({ catData }: ArticlesProps) => {
	const pathToPhoto = 'https://codex-dev.pro/';

	console.log(catData);

	return (
		<div className='App'>
			{/* Якщо масив продуктів не порожній */}
			<ul className=' relative grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{catData.map(product => (
					<li key={product.id} className='h-full'>
						<ProductCard
							title={product.name_ua}
							price={product.price}
							article={product.item_number}
							image={`${pathToPhoto}${product.photo}`}
						/>
					</li>
				))}

				{/* Якщо продукти відсутні */}
				{catData.length === 0 && <Loader />}
			</ul>

			<Popup>
				<SingleProductCrad />
			</Popup>
		</div>
	);
};
