import Image from 'next/image';
import React from 'react';

interface CategoryCardProps {
	title: string;
	custom?: string;
	image?: any;
}

export const CategoryCard = ({ image, title }: CategoryCardProps) => {
	return (
		<div className='relative rounded-xl shadow-md overflow-hidden h-full'>
			<Image src={image} alt='Category card' width={500} className='' />
			<div className='absolute flex justify-center items-center inset-x-0 bottom-0  bg-slate-500 bg-opacity-15 backdrop-blur-md rounded-b-xl w-full h-1/5'>
				<p className='leading-none text-base text-center'>{title}</p>
			</div>
		</div>
	);
};
