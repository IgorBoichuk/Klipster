import React, { useContext, useState } from 'react';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { Loader } from './Loader';
import { Popup } from './Popup';
import { SingleProductCrad } from './SingleProductCrad';
import { usePopup } from '@/app/providers/usePopup';

interface ArticlesProps {
	catData: Product[];
	isLoading: boolean;
}

export const Articles: React.FC<ArticlesProps> = ({ catData, isLoading }) => {
	const { openProduct, isOpenProduct } = usePopup(); // Отримуємо функції та стан з контексту
	const [choosenProdukt, setChoosenProdukt] = useState<Product | null>(null);

	const pathToPhoto = 'https://klipster.com.ua/';

	// Обробка кліку на продукт
	const ClickOnProdukt = (id: number): void => {
		openProduct(); // Відкриваємо попап через контекст
		const chooseProdukt = catData.find(item => item.id === id);
		setChoosenProdukt(chooseProdukt || null); // Встановлюємо вибраний продукт
	};

	return (
		<div>
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				{catData.map(product => (
					<li key={product.id} onClick={() => ClickOnProdukt(product.id)} className=''>
						<ProductCard
							title={product.name_ua}
							price={product.price}
							article={product.item_number}
							image={`${pathToPhoto}${product.photo}`}
						/>
					</li>
				))}
			</ul>

			{/* Відображення попапу з продуктом */}
			{isOpenProduct && choosenProdukt && (
				<Popup
					// Передаємо функцію закриття
					customOverlay='absolute top-0 left-0 bg-slate-500 bg-opacity-15 backdrop-blur-md'
				>
					<SingleProductCrad selectedProduct={choosenProdukt} img={pathToPhoto} />
				</Popup>
			)}

			{/* Показуємо спінер під час завантаження */}
			{isLoading && <Loader />}
		</div>
	);
};
