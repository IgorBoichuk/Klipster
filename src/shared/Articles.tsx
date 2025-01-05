import React, { useEffect } from 'react';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { useRouter } from 'next/navigation';
import { useCategory } from '@/app/providers/CategoryContext';

interface ArticlesProps {
	catData: Product[];
	currentPathLink?: string | null;
}

export const Articles: React.FC<ArticlesProps> = ({ catData }) => {
	const { setCategoryName, categoryName, choosenProdukt, setChoosenProdukt, categorySlug } = useCategory();

	const pathToPhoto = 'https://klipster.com.ua/';
	const router = useRouter();

	const currentname = catData[0].category_ua;

	useEffect(() => {
		if (!categoryName) {
			setCategoryName(currentname);
		}
	}, [categoryName, currentname, setCategoryName]);

	const ClickOnProdukt = (id: number, name: string, article: string): void => {
		const clicketProdukt = catData.find(item => item.id === id);
		setChoosenProdukt(clicketProdukt);
		const formattedName =
			article +
			name
				.trim()
				.toLowerCase()
				.replace(/[^a-zа-я0-9\s]/gi, '')
				.replace(/\s+/g, '-');
		router.push(`/categories/${categorySlug}/${article}`);
	};

	console.log('choosenProdukt', choosenProdukt);

	return (
		<div>
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center'>
				{catData.map(product => (
					<li
						key={product.id}
						onClick={() => ClickOnProdukt(product.id, product.name_ua, product.item_number)}
						className=''
					>
						<ProductCard
							id={product.id}
							title={product.name_ua}
							price={product.price}
							article={product.item_number}
							image={`${pathToPhoto}${product.photo}`}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
