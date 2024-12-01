// 'use client';
import Bolts from '../../public/images/boltstt.png';

import React from 'react';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';

// Типізація пропсів для компонента Articles
interface ArticlesProps {
	catData: Product[]; // Оновлено, щоб приймати масив продуктів
}

export const Articles = ({ catData }: ArticlesProps) => {
	return (
		<div className='App'>
			{/* Якщо масив продуктів не порожній */}
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{catData.map(product => (
					<li key={product.id} className='h-full'>
						<ProductCard title={product.name_ua} price={product.price} article={product.item_number} image={Bolts} />
					</li>
				))}

				{/* Якщо продукти відсутні */}
				{catData.length === 0 && <p>Товари не знайдено</p>}
			</ul>
		</div>
	);
};
