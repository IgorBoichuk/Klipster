import Image from 'next/image';
import React from 'react';

export const CategoryCard = ({ image }) => {
	return (
		<div className='relative w-160 bg-white border-0 border-gray-300 rounded-xl shadow-md flex justify-center'>
			<Image src={image} alt='Category' width={300} className='' />
			<div className='absolute inset-x-0 bottom-0 place-items-center bg-slate-500 bg-opacity-15 backdrop-blur-md rounded-md w-full h-12'>
				<p className='mt-3'>Болти</p>
			</div>
		</div>
	);
};
