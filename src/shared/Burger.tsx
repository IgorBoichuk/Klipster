'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import BurgerMenu from '../../public/svg/burger.svg';
import Cross from '../../public/svg/cross.svg';
import { Popup } from './Popup';
import { NavMenu } from './NavMenu';
import { usePopup } from '@/app/providers/usePopup';

export const Burger = () => {
	const { isOpenPopup, togglePopup, closePopup } = usePopup();
	return (
		<div>
			<button type='button' onClick={togglePopup} className='relative z-10 flex lg:hidden w-6 h-6 items-center'>
				{isOpenPopup ? (
					<Image src={Cross} fill={true} alt='Menu button close' />
				) : (
					<Image src={BurgerMenu} fill={true} alt='Menu button' />
				)}
			</button>
			{isOpenPopup ? (
				<Popup
					custom='flex flex-col p-2
          right-2 w-[70%] 
          sm:w-1/2 md:w-[50%] lg:w-[40%] 
          py-[15px] lg:hidden bg-cyellow '
					navMenu
				>
					<NavMenu custom='flex-col' burger />
				</Popup>
			) : null}
		</div>
	);
};
