import Image from 'next/image';
import React from 'react';

export const RecommendedProducts = ({ image }) => {
	return (
		<div className='w-99 bg-white border-0 border-gray-300 rounded-xl shadow-md'>
			<Image src={image} alt='Category' />
		</div>
	);
};
