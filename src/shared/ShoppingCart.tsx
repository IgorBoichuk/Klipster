'use client';
import React from 'react';
import Image from 'next/image';
import Cart from '../../public/svg/cartt.svg';
import { Popup } from './Popup';
import { usePopup } from '@/app/hooks/usePopup';
import { SectionTitle } from './SectionTitle';
import { useCart } from '@/app/providers/CartContext';

export const ShoppingCart = () => {
	const { partsInCart, removeFromCart } = useCart();
	const { isOpenPopup, togglePopup } = usePopup();

	return (
		<div>
			<button type='button' onClick={togglePopup} className='w-6 h-6 lg:w-8 lg:h-8'>
				<Image src={Cart} width={40} alt='Login link'></Image>
			</button>
			{/* <h1 className='text-2xl font-bold mb-6'>Кошик</h1> */}
			{isOpenPopup ? (
				<Popup
					custom='flex flex-col p-2 right-2 w-[70%] sm:w-1/2 md:w-[50%] lg:w-[40%] py-[15px] lg:hidden bg-cyellow'
					navMenu
				>
					<div className='absolute top-0 right-0 w-[30%] grid gap-6 h-full p-6 bg-cwhite '>
						<SectionTitle title='Ваш кошик' />
						{/* <p>В кошику поки що пусто</p> */}
						{partsInCart.length === 0 && <SectionTitle title='В кошику поки що пусто' />}

						<div className='overflow-y-auto grid gap-6'>
							{partsInCart.map(part => (
								<div className='grid grid-cols-3 gap-6 items-center grid-cols-[30px_auto_130px]'>
									{/* <input type='checkbox' className='' /> */}
									<div className='rounded-lg drop-shadow-md flex items-center justify-center'>
										<Image src={part.image} alt='Category' width={500} height={500} className='' />
									</div>
									<div className='flex flex-col flex-grow pl-2'>
										<h2 className='text-sm font-medium mb-4'>{part.title}</h2>
										<div className='relative grid grid-cols-3 text-center bg-slate-200 rounded-xl items-center w-20'>
											<button className='relative py-2 px-2 '>-</button>
											<input
												className='bg-slate-200 text-center appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden'
												type='number'
												value={part.quantity}
											/>
											<button className='relative py-2 px-2 '>+</button>
										</div>
									</div>
								</div>
							))}
						</div>
						<SectionTitle title='Мінімальна сума до замовлення 200 грн' custom='text-red-500' />

						<button
							className={`inactive bg-cyellow text-cwhite w-full py-2 rounded-lg text-lg font-medium cursor-pointer`}
						>
							Оформити замовлення
						</button>
					</div>
				</Popup>
			) : null}
		</div>
	);
};
