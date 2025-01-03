'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Cart from '../../public/svg/cartt.svg';
import EmptyCart from '../../public/images/cartpicture.png';
import { Popup } from './Popup';
import { usePopup } from '@/app/hooks/usePopup';
import { SectionTitle } from './SectionTitle';
import { useCart } from '@/app/providers/CartContext';

export const ShoppingCart = () => {
	const { partsInCart, removeFromCart, updateQuantity } = useCart();
	const [totalPrice, setTotalPrice] = useState(0);
	const { isOpenCart, openCart } = usePopup();

	// Обчислення загальної суми
	useEffect(() => {
		const total = partsInCart.reduce((sum, part) => sum + part.price * part.quantity, 0);
		setTotalPrice(total);
	}, [partsInCart]);

	// Обробники для кнопок + і -
	const increaseQuantity = (id: number) => {
		const item = partsInCart.find(part => part.id === id);
		if (item) updateQuantity(id, item.quantity + 1);
	};

	const decreaseQuantity = (id: number) => {
		const item = partsInCart.find(part => part.id === id);
		if (item) updateQuantity(id, item.quantity - 1);
	};

	// Обробник для інпуту
	const handleInputChange = (id: number, value: string) => {
		const quantity = parseInt(value, 10);
		if (!isNaN(quantity)) updateQuantity(id, quantity);
	};

	// Видалення товару
	const onRemove = (event: React.MouseEvent<HTMLButtonElement>, partId: number) => {
		event.stopPropagation();
		removeFromCart(partId);
	};

	return (
		<div>
			<button type='button' onClick={openCart} className='relative w-6 h-6 lg:w-8 lg:h-8'>
				<Image src={Cart} width={40} alt='Cart icon'></Image>
				{partsInCart.length > 0 ? (
					<span className='absolute -top-2 -right-4 w-6 h-6 rounded-full bg-cyellow text-cblack'>
						{partsInCart.length}
					</span>
				) : null}
			</button>
			{isOpenCart && (
				// <Popup custom='flex flex-col p-2 right-2 w-[70%] sm:w-1/2 md:w-[50%] lg:w-[40%] py-[15px] lg:hidden bg-cyellow'>
				<Popup custom='flex flex-col lg:hidden bg-cyellow'>
					<div className='absolute top-0 right-0 w-[40%] grid h-full pl-6 pr-2 pb-2 bg-cwhite '>
						<SectionTitle title='Ваш кошик' />

						{partsInCart.length === 0 && (
							<div className='overflow-y-auto'>
								<Image src={EmptyCart} width={500} alt='Empty cart' className='m-auto w-1/2' />
								<SectionTitle title='В кошику поки що пусто' />
								<span>Але це не пізно виправити :)</span>
							</div>
						)}
						<div className='overflow-y-auto grid gap-2 '>
							{partsInCart.map(part => (
								<div key={part.id} className='grid grid-cols-2 pb-2 border-b border-b-cdarkgray items-center'>
									<Image
										src={part.image}
										alt='Category'
										width={500}
										height={500}
										className='rounded-lg drop-shadow-md flex items-center justify-center w-32'
									/>

									<div className='flex flex-col flex-grow pl-2'>
										<h2 className='text-sm font-medium mb-4'>{part.title}</h2>
										<div className='relative grid grid-cols-3 text-center bg-slate-200 rounded-xl items-center w-20'>
											<button className='relative py-2 px-2' onClick={() => decreaseQuantity(part.id)}>
												-
											</button>
											<input
												className='bg-slate-200 text-center appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden'
												type='number'
												value={part.quantity}
												onChange={e => handleInputChange(part.id, e.target.value)}
											/>
											<button className='relative py-2 px-2' onClick={() => increaseQuantity(part.id)}>
												+
											</button>
										</div>
										<p className='text-xs'>{part.quantity * part.price} грн.</p>
										<button
											type='button'
											onClick={event => onRemove(event, part.id)}
											className='bg-cyellow text-cwhite w-max px-2 rounded-lg'
										>
											Remove
										</button>
									</div>
								</div>
							))}
						</div>
						{totalPrice < 200 ? (
							<div>
								<p className='text-red-600'>Мінімальна сума до замовлення 200 грн</p>
								<p>Сума Вашого замовлення {totalPrice} грн</p>
							</div>
						) : (
							<p>Сума Вашого замовлення {totalPrice} грн</p>
						)}

						<button
							disabled={totalPrice < 200}
							className={`text-cwhite w-full h-max py-2 rounded-lg text-lg font-medium 
                ${totalPrice < 200 ? 'bg-cgray' : 'bg-cyellow'}
							`}
						>
							Оформити замовлення
						</button>
					</div>
				</Popup>
			)}
		</div>
	);
};
