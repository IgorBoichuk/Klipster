import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Home from '../../public/svg/home.svg';
import Filter from '../../public/svg/filter.svg';
import { useCategory } from '@/app/providers/CategoryContext';

export const BreadCrumb = () => {
	const { categoryName } = useCategory();
	return (
		<nav className='flex items-center space-x-2 bg-gray-100 p-4 rounded-lg shadow-md'>
			<Link href='/' className='text-black font-semibold hover:text-gray-700'>
				<Image src={Home} alt='home button' />
			</Link>
			<span className='text-gray-500'>›</span>

			<Link href='/categories' className='text-black font-semibold hover:text-gray-700'>
				Категорії
			</Link>
			<span className='text-gray-500'>›</span>

			<span className='text-gray-600 truncate'>{categoryName}</span>
			<Image src={Filter} alt='filter button' />
		</nav>
	);
};

export default BreadCrumb;
