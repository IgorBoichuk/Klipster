'use client';
import { usePopup } from '@/app/providers/usePopup';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

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

	const pathname = usePathname();

	return (
		<nav
			onClick={() => {
				burger && closePopup();
			}}
			className={`${!burger && !footer ? 'hidden lg:block' : ''}`}
		>
			<ul
				className={`flex md:text-[16px] ${burger ? 'text-start gap-2' : 'gap-8'} 
				${header ? 'grid grid-cols-4 text-center gap-8' : ''} 
				${custom ? custom : ''}
			`}
			>
				{menu.map(i => (
					<li
						key={i.id}
						className={` 
							${pathname === i.href && header ? '  bg-cyellow ' : ''}
							${burger && 'rounded-xl bg-cwhite shadow-md'} 
							${header && 'text-sm text-cwhite rounded-t-lg border-cdarkgray border-t-[1px] hover:bg-cyellow'}`}
					>
						<Link
							href={i.href}
							className={`								
								${burger && pathname === i.href ? 'block p-2 w-[100%] text-cyellow' : 'block p-2 w-[100%]'}
								${header && 'block px-6 py-2 w-[100%]'}
								${footer && pathname === i.href ? ' text-cyellow' : ''}
								${footer ? 'text-cwhite hover:text-cyellow bg-none ' : ''} 
								`}
						>
							{i.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
