'use client';

import { RecommendedProducts } from '@/shared/RecommendedProducts';
import { AboutUs } from '@/shared/AboutUs';
import { Sections } from '@/shared/Sections';
import { useEffect, useState } from 'react';
import Bolt from '../../public/images/bolts.png';

interface Product {
	id: number;
	name: string;
	price: number;
}

export default function Home() {
	const [, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('/api/getData?table=partsitems');

				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};

		fetchProducts();
	}, []);
	return (
		<div>
			<Sections />
			<RecommendedProducts image={Bolt} title={'Рекомендовані товари'} />
			<AboutUs />
		</div>
	);
}
