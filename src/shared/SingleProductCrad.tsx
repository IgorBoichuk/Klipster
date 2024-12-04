import React from 'react';
import Image from 'next/image';
import Bolts from '../../public/images/boltstt.png';

export const SingleProductCrad = () => {
	return (
		<div className='grid grid-cols-2 rounded-xl shadow-md overflow-hidden h-max mt-5 w-1/2 ml-auto mr-auto bg-cwhite'>
			<div className='relative'>
				<Image src={Bolts} alt='Product card' width={500}></Image>
				<button className='absolute top-5 right-5 cursor-pointer'>X</button>
			</div>
			<div>
				<div className='w-11/12 h-px bg-slate-300'></div>
				<div className='p-4 grid grid-cols-1 gap-2'>
					<p className='text-2xl font-medium'>Кліпса кріплення обшивки MAK</p>
					<p className=' text-base text-slate-400 font-normal'>Артикул: 11036</p>
					<div className='grid grid-cols-2 gap-2 m-1 items-center'>
						<p className='text-xl font-normal'>32 грн.</p>
						<div className='inline-grid grid-cols-3 bg-slate-200 rounded-xl items-center h-10 w-2/4 ml-auto'>
							<button className='cursor-pointer'>-</button>
							<span className='leading-none text-base text-center'>1</span>
							<button className='cursor-pointer'>+</button>
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
						<span className='value'>сірий</span>
					</div>
				</div>
			</div>
			<h3 className='text-base font-semibold'>Опис</h3>
			<ul className=''>
				<li>Код деталі в оригінальному каталозі:</li>
				<li>Ford W705002S300</li>
				<li>Ford 4067083</li>
				<li>Ford 4911148</li>
				<li>Ford W708633S300</li>
				<li>Для отвору діаметром 6.5мм</li>
			</ul>
		</div>
	);
};
