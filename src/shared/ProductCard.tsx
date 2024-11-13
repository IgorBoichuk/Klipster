import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProductCardProps {
	title: string;
	image: string | StaticImageData;
	custom?: string;
}

export const ProductCard = ({ image, title }: ProductCardProps) => {
	return (
		<div className='flex items-center flex-col rounded-xl shadow-md overflow-hidden h-full'>
			<Image src={image} alt='Category card' width={500} className=''></Image>
			<div className='w-4/5 h-px bg-slate-300'></div>
			<div className='p-4 grid grid-cols-1 gap-2'>
				<p className=' text-xs'>{title}</p>
				<p className=' text-xs'>Артикул: 11036</p>
				<div className='grid grid-cols-2 gap-2 m-1 items-center'>
					<p className='text-xs'>32 грн.</p>
					<div className='inline-grid grid-cols-3 bg-slate-200 rounded-xl m-auto h-9 w-20 items-center'>
						<button className='cursor-pointer'>-</button>
						<span className='leading-none text-base text-center'>1</span>
						<button className='cursor-pointer'>+</button>
					</div>
				</div>
				<button className='add-to-cart cursor-pointer rounded-xl bg-amber-300 h-9 w-28 m-auto'>В корзину</button>
			</div>
		</div>
	);
};
