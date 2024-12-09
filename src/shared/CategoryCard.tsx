import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CategoryCardProps {
	title: string;
	pathname?: string;
	custom?: string;
	image?: string | StaticImageData;
	isCategory?: boolean;
	categoryId?: string;
	onClick?: () => void; // Додаємо обробник кліку
}

export const CategoryCard = ({ image, title, pathname, isCategory, onClick }: CategoryCardProps) => {
	const pathToCatalog = 'https://klipster.com.ua';

	// Логіка для формування URL з параметром 'section'
	const href = isCategory
		? `/categories/${pathname}` // Якщо на сторінці категорій — ведемо на сторінку з товарами
		: pathname
		? `/categories?section=${encodeURIComponent(pathname)}` // Якщо на головній — ведемо на фільтри
		: '/categories';

	// Обробка кліку
	const handleClick = () => {
		// Якщо передана функція `onClick`, викликаємо її
		if (onClick) {
			onClick();
		}
	};

	return (
		<Link
			href={href}
			className='relative block rounded-xl shadow-md overflow-hidden h-full'
			onClick={handleClick} // Додаємо обробку кліку
		>
			{image && (
				<Image src={`${pathToCatalog}${image}`} alt='Category card' width={500} height={500} unoptimized className='' />
			)}
			<div className='absolute flex justify-center items-center inset-x-0 bottom-0 bg-slate-500 bg-opacity-15 backdrop-blur-md rounded-b-xl w-full h-1/5'>
				<p className='leading-none text-base text-center'>{title}</p>
			</div>
		</Link>
	);
};
