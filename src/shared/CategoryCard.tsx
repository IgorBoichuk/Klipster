import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CategoryCardProps {
	title: string;
	pathname?: string;
	custom?: string;
	image?: string | StaticImageData;
}

export const CategoryCard = ({ image, title, pathname }: CategoryCardProps) => {
	const pathToCatalog = 'https://codex-dev.pro';

	return (
		<div className='relative rounded-xl shadow-md overflow-hidden h-full'>
			<Link href={`/categories?section=${encodeURIComponent(pathname || '')}`}>
				{image && (
					<Image
						src={`${pathToCatalog}${image}`}
						alt='Category card'
						width={500}
						height={500}
						unoptimized
						className=''
					/>
				)}
				<div className='absolute flex justify-center items-center inset-x-0 bottom-0 bg-slate-500 bg-opacity-15 backdrop-blur-md rounded-b-xl w-full h-1/5'>
					<p className='leading-none text-base text-center'>{title}</p>
				</div>
			</Link>
		</div>
	);
};
