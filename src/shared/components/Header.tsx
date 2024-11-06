//import React from 'react';

import Image from 'next/image';
import { Container } from '../Container';
import Link from 'next/link';
import Logo from '../../../public/logo/logo.svg';
import Phone from '../../../public/svg/phone.svg';
import Find from '../../../public/svg/find.svg';
import Login from '../../../public/svg/login.svg';
import { Burger } from '../Burger';

export const Header = () => {
	// const pathname = usePathname().split('/')[1]

	return (
		<header className='sticky top-0 z-[100] bg-cdark border-b '>
			<Container>
				<div className='py-4 flex justify-between items-center'>
					<Link href={'/'} className='block w-[102px]'>
						<Image src={Logo} width={500} height={500} priority={true} alt='logo klipster' className=' ' />
					</Link>
					<div className='flex gap-3'>
						<Link href={'tel:${+380930392656}'}>
							<Image src={Phone} alt='phone link'></Image>
						</Link>
						<Link href={''}>
							<Image src={Find} alt='Find link'></Image>
						</Link>
						<button>
							<Image src={Login} alt='Login link'></Image>
						</button>
						<Burger />
					</div>
				</div>
			</Container>
		</header>
	);
};
