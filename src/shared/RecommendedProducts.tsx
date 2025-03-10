// import Image, { StaticImageData } from 'next/image';   --------------------- можливо буде потрібно коли будуть запити фоток з бази даних
import Image from 'next/image';
import React from 'react';
import { SectionTitle } from './SectionTitle';
import Clipsest from '../../public/images/clipsest.png';

interface RecommendedProductsProps {
	title: string;
	custom?: string;
	// image: string | StaticImageData;
}

export const RecommendedProducts = ({ title }: RecommendedProductsProps) => {
	return (
		<div>
			<SectionTitle title={title} />
			<ul className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4'>
				<li className='rounded-xl shadow-md flex items-center justify-center h-full'>
					<Image src={Clipsest} alt='Category' width={500} className='' />
				</li>
				<li className='rounded-xl shadow-md flex items-center justify-center h-full'>
					<Image src={Clipsest} alt='Category' width={500} className='' />
				</li>
				<li className='rounded-xl shadow-md flex items-center justify-center h-full'>
					<Image src={Clipsest} alt='Category' width={500} className='' />
				</li>
				<li className='rounded-xl shadow-md flex items-center justify-center h-full'>
					<Image src={Clipsest} alt='Category' width={500} className='' />
				</li>
				<li className='rounded-xl shadow-md flex items-center justify-center h-full'>
					<Image src={Clipsest} alt='Category' width={500} className='' />
				</li>
				<li className='rounded-xl shadow-md flex items-center justify-center h-full'>
					<Image src={Clipsest} alt='Category' width={500} className='' />
				</li>
			</ul>
		</div>
	);
};
