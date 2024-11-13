import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { SectionTitle } from './SectionTitle';
import Clipsest from '../../public/images/clipsest.png';

interface ReviewedGoodsProps {
	title: string;
	image: string | StaticImageData;
	custom?: string;
}

export const ReviewedGoods = ({ image, title }: ReviewedGoodsProps) => {
	return (
		<div>
			<SectionTitle title={title} />
			<ul className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4'>
				<li className='rounded-xl shadow-md flex items-center justify-center h-full'>
					<Image src={image} width={500} alt='' />
				</li>
				<li className='rounded-xl shadow-md flex items-center justify-center h-full'>
					<Image src={Clipsest} width={500} alt='' />
				</li>
				<li className='rounded-xl shadow-md flex items-center justify-center h-full'>
					<Image src={image} width={500} alt='' />
				</li>
			</ul>
		</div>
	);
};
