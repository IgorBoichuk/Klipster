'use client';
import { usePopup } from '@/app/providers/usePopup';
// import { Link } from '@/navigation';
// import { usePopup } from '@/providers/usePopup';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavMenuProps {
	custom?: string;
	footer?: boolean;
	burger?: boolean;
}

export const NavMenu = ({ custom, footer, burger }: NavMenuProps) => {
	//@ts-ignore
	const { closePopup } = usePopup();
	const menu = [
		{ id: 1, name: 'Головна', href: '/' },
		{ id: 2, name: 'Всі категорії', href: '/categories' },
		{ id: 3, name: 'Оплата і доставка', href: '/delivery' },
		{ id: 5, name: 'Контакти', href: '/contacts' },
	];

	const pathname = usePathname();

	return (
		<nav
			onClick={() => {
				burger && closePopup();
			}}
		>
			<ul className={`flex  ${custom ? custom : ''}  md:text-[16px] ${burger ? 'text-start gap-2' : 'gap-8'}`}>
				{menu.map(i => (
					<li key={i.id} className={` ${burger && ' shadow-[5px_10px_30px_0px_rgba(187,187,211,0.50)]   '}`}>
						<Link
							//@ts-ignore
							href={i.href}
							className={`  ${
								!footer ? 'text-cwhite hover:text-cyellow ' : 'block text-cyellow rounded-xl p-2 w-[100px] h-[20px]]'
							} 
              ${(pathname.slice(3) === i.href || pathname.slice(0, -2) === i.href) && !footer ? '  text-cwhite ' : ''}
              ${burger && 'block rounded-xl p-2 bg-cwhite text-cblack'}`}
						>
							{i.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
