'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types'; // Важливо, щоб шлях до `Product` був коректним
import Cross from '../../public/svg/close.svg';
import { useCategory } from '@/app/providers/CategoryContext';

// Типи для пропсів компонента
interface SingleProductCradProps {
	selectedProduct: Product; // Продукт, який буде відображатися
	img: string; // Шлях до базового URL для зображень
	onClose: () => void;
}

export const SingleProductCrad: React.FC<SingleProductCradProps> = ({ selectedProduct, img, onClose }) => {
	const { setCategoryName, categoryName, choosenProdukt, setChoosenProdukt } = useCategory();

	console.log('choosenProdukt', choosenProdukt);

	const [quantity, setQuantity] = useState(1);

	const onQuantityChange = (event: 'increment' | 'decrement') => {
		if (event === 'increment') {
			setQuantity(prev => prev + 1);
		} else if (event === 'decrement') {
			setQuantity(prev => (prev <= 1 ? 1 : prev - 1));
		}
	};

	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuantity(Number(event.target.value));
	};

	return (
		<div className='relative z-50 left-1/2 -translate-x-1/2 mt-28 grid grid-cols-1 md:grid-cols-2 rounded-xl shadow-md h-max w-[90%] md:w-4/5 bg-cwhite p-6'>
			<div className=' ml-auto mr-auto '>
				<Image src={`${img}${choosenProdukt?.photo}`} alt='Product card' width={500} height={500} className=' ' />
				<div className='w-full h-[2px] bg-slate-300'></div>
			</div>

			<div>
				<div className='p-4 grid grid-cols-1 gap-2'>
					<h1 className='text-2xl xl:text-[28px] font-medium'>{choosenProdukt?.name_ua}</h1>
					<div className='flex justify-between'>
						<p className='text-base xl:text-2xl text-slate-400 font-normal'>Бренд: {choosenProdukt?.brand}</p>
						<p className='text-base xl:text-2xl text-slate-400 font-normal'>Артикул: {choosenProdukt?.item_number}</p>
					</div>
					<div className='grid grid-cols-2 items-center py-4'>
						<p className='text-xl font-normal'>
							{quantity ? quantity * choosenProdukt?.price : choosenProdukt?.price} грн.
						</p>
						<div className='relative grid grid-cols-3 text-center bg-slate-200 rounded-xl items-center'>
							<button className='relative py-2 px-2 vertical-after' onClick={() => onQuantityChange('decrement')}>
								-
							</button>
							<input
								className='bg-slate-200 text-center appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden'
								type='number'
								value={quantity}
								onChange={onInputChange}
							/>
							<button className='relative py-2 px-2 vertical-before' onClick={() => onQuantityChange('increment')}>
								+
							</button>
						</div>
					</div>
					<button className='add-to-cart cursor-pointer rounded-xl bg-amber-300 h-9 w-4/5 m-auto'>В корзину</button>
					<h3 className='text-base font-semibold'>Характеристики</h3>
					<div className='flex space-between items-center text-nowrap'>
						<span className='label'>Діаметр:</span>
						<div className='border-b-2 border-dotted border-gray-300 w-screen p-2 m-1'></div>
						<span className='value'>8 мм</span>
					</div>
					<div className='flex space-between items-center text-nowrap'>
						<span className='label'>Довжина:</span>
						<div className='border-b-2 border-dotted border-gray-300 w-screen p-2 m-1'></div>
						<span className='value'>20 мм</span>
					</div>
					<div className='flex space-between items-center text-nowrap'>
						<span className='label'>Діаметр шляпки:</span>
						<div className='border-b-2 border-dotted border-gray-300 w-screen p-2 m-1'></div>
						<span className='value'>40 мм</span>
					</div>
					<div className='flex space-between items-center text-nowrap'>
						<span className='label'>Колір:</span>
						<div className='border-b-2 border-dotted border-gray-300 w-screen p-2 m-1'></div>
						<span className='value'>{choosenProdukt?.color}</span>
					</div>
				</div>
			</div>
			<div>
				<p className='text-base font-semibold'>Опис</p>
				<ul className=''>
					<li>Код деталі в оригінальному каталозі:</li>
					<li>Ford W705002S300</li>
					<li>Ford 4067083</li>
					<li>Ford 4911148</li>
					<li>Ford W708633S300</li>
					<li>Для отвору діаметром 6.5мм</li>
				</ul>
			</div>
		</div>
	);
};
