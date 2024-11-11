import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Home from '../../public/svg/home.svg';
import Filter from '../../public/svg/filter.svg';

export const BreadCrumb = () => {
	return (
		<nav className='flex items-center space-x-2 bg-gray-100 p-4 rounded-lg shadow-md'>
			<Image src={Home} alt='home button' />
			<span className='text-gray-500'>›</span>

			<Link href='/categories' className='text-black font-semibold hover:text-gray-700'>
				Категорії
			</Link>
			<span className='text-gray-500'>›</span>

			<span className='text-gray-600 truncate'>Кріплення обшивки, одна шляпка</span>
			<Image src={Filter} alt='filter button' />
		</nav>
	);
};

export default BreadCrumb;
