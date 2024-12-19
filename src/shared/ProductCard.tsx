import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import TempImage from '../../public/images/avatar/avatar2.png';
import { useCart } from '@/app/providers/CartContext';

interface ProductCardProps {
	id: number;
	title: string;
	image: StaticImageData | string;
	price: number; // додали price
	article: string; // додали article
	quantity?: number;
}

export const ProductCard = ({ id, image, title, price, article }: ProductCardProps) => {
	const [quantity, setQuantity] = useState(1);

	const { addToCart } = useCart();

	const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = TempImage.src; // Підставляємо fallback-зображення
	};

	const onQuantityChange = (event: React.MouseEvent<HTMLButtonElement>, action: 'increment' | 'decrement') => {
		event.stopPropagation();
		if (action === 'increment') {
			setQuantity(prev => prev + 1);
		} else if (action === 'decrement') {
			setQuantity(prev => (prev <= 1 ? 1 : prev - 1));
		}
	};

	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.stopPropagation();
		const value = Number(event.target.value);
		if (value > 0) {
			setQuantity(value);
		} else {
			setQuantity(1); // У разі некоректного значення
		}
	};

	const onAddToCart = (
		event: React.MouseEvent<HTMLButtonElement>,
		id: number,
		title: string,
		image: StaticImageData | string,
		price: number,
		article: string,
		quantity: number
	) => {
		event.stopPropagation();
		addToCart({ id, title, image, price, article, quantity }); // Додаємо товар до кошика
	};

	return (
		<div className='flex items-center flex-col rounded-xl shadow-md overflow-hidden h-full mt-2'>
			<Image src={image} alt={title} width={500} height={500} onError={handleImageError} className='' />
			<div className='w-4/5 h-px bg-slate-300'></div>
			<div className='p-4 grid grid-cols-1 gap-2'>
				<p className='text-xs'>{title}</p>
				<p className='text-xs'>Артикул: {article}</p>
				<div className='grid grid-cols-2 gap-2 m-1 items-center'>
					<p className='text-xs'>{quantity ? quantity * price : price} грн.</p>
					<div className='inline-grid grid-cols-3 bg-slate-200 rounded-xl items-center h-9'>
						<button className=' vertical-after' onClick={event => onQuantityChange(event, 'decrement')}>
							-
						</button>

						<input
							className='bg-slate-200 text-center appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden'
							type='number'
							value={quantity}
							onChange={onInputChange}
						/>
						<button className=' vertical-before' onClick={event => onQuantityChange(event, 'increment')}>
							+
						</button>
					</div>
				</div>
				<button
					className='add-to-cart rounded-xl bg-amber-300 h-9 w-28 m-auto'
					onClick={event => onAddToCart(event, id, title, image, price, article, quantity)}
				>
					В корзину
				</button>
			</div>
		</div>
	);
};
