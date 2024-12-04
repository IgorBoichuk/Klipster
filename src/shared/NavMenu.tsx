'use client';
import { usePopup } from '@/app/providers/usePopup';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import FilterBySection from './FilterBySection';
import useCategories from '@/app/hooks/useCategories';
import Arrow from '../../public/svg/arrow.svg';
import Image from 'next/image';

interface NavMenuProps {
	custom?: string;
	footer?: boolean;
	burger?: boolean;
	header?: boolean;
}

export const NavMenu = ({ custom, footer, burger, header }: NavMenuProps) => {
	const { closePopup } = usePopup();
	const menu = [
		{ id: 1, name: 'Головна', href: '/' },
		{ id: 2, name: 'Всі категорії', href: '/categories' },
		{ id: 3, name: 'Оплата і доставка', href: '/delivery' },
		{ id: 5, name: 'Контакти', href: '/contacts' },
	];

	const [isDataLoading, setIsDataLoading] = useState(true);
	const [showPopup, setShowPopup] = useState(false); // Стан для показу попапу
	const searchParams = useSearchParams();
	const sectionFromUrl = searchParams?.get('section') ?? null;
	const pathname = usePathname();
	const { filteredCategories, sections, selectedSection, handleSectionChange } = useCategories(sectionFromUrl);

	useEffect(() => {
		if (filteredCategories.length > 0) {
			setIsDataLoading(false);
		}
	}, [filteredCategories]);

	return (
		<nav
			onClick={() => {
				if (burger) {
					closePopup();
				}
			}}
			className={`${!burger && !footer ? 'hidden lg:block' : ''}`}
		>
			<ul
				className={`flex ${burger ? 'text-start gap-2 text-xl py-3' : ''} 
				${header ? 'grid grid-cols-4 text-center gap-8 text-sm lg:text-base xl:text-lg' : ''} 
				${footer ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-center  text-xs xl:text-lg' : ''} 
				${custom ? custom : ''}
			`}
			>
				{menu.map(i => (
					<li
						key={i.id}
						className={` 
							${pathname === i.href && header ? '  bg-cyellow ' : ''}
							${burger && 'rounded-xl bg-cwhite shadow-md'} 
							${header && ' text-cwhite rounded-t-lg border-cdarkgray border-t-[1px] hover:bg-cyellow'}
							${footer && ''} 
								${i.href === '/categories' ? '' : ''}
							`}
						onMouseEnter={() => i.href === '/categories' && setShowPopup(true)} // Показуємо попап
						onMouseLeave={() => i.href === '/categories' && setShowPopup(false)} // Ховаємо попап
					>
						<Link
							href={i.href}
							className={`								
								${burger ? 'block py-2 px-6 w-[100%]' : ''}
								${burger && pathname === i.href ? ' block py-2 px-6 w-[100%] text-cyellow' : 'block  w-[100%]'}
								${header && 'flex justify-center gap-6 items-center text-nowrap  px-6 py-2 w-[100%]'}
								${footer ? 'text-cwhite hover:text-cyellow bg-none text-center w-full text-xs xl:text-lg' : ''} 
								${footer && pathname === i.href ? ' text-cyellow' : ''}
								`}
						>
							{i.name}{' '}
							{i.href === '/categories' && !footer ? (
								<Image src={Arrow} alt='down arrow' width={8} className='rotate-90' />
							) : (
								''
							)}
						</Link>
						{/* Попап меню */}
						{i.href === '/categories' && showPopup && (
							<div className='absolute left-1/2 -translate-x-1/2 bg-cyellow shadow-lg p-4 rounded-md w-[80%]'>
								<FilterBySection
									sections={sections}
									selectedSection={selectedSection}
									onSelectSection={handleSectionChange}
									filteredCategories={filteredCategories}
									sectionFromUrl={sectionFromUrl}
									section_ua={''} // При необхідності, встановіть правильне значення
									section_en={''} // Аналогічно для section_en
								/>
							</div>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};
