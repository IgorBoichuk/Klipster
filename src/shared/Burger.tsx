'use client';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import BurgerMenu from '../../public/svg/burger.svg';
import { Popup } from './Popup';
import { PopupContext } from '@/app/providers/PopupProvider';

export const Burger = () => {
	//@ts-ignore
	const { isOpenPopup, openPopup, togglePopup } = useContext(PopupContext);
	return (
		<div>
			<button type='button' onClick={togglePopup} className=' relative z-10 flex xl:hidden'>
				<Image src={BurgerMenu} alt='BurgerMenu button' />
			</button>
			{isOpenPopup ? (
				<Popup
					custom='flex justify-around flex-col items-center gap-[80px] 
          right-2 w-[70%] 
          sm:w-1/2 md:w-[50%] lg:w-[40%] h-4/6 md:h-5/6
          py-[50px]'
					navMenu
				>
					{/* <NavMenu custom='flex-col ' burger /> */}
				</Popup>
			) : null}
		</div>
	);
};
