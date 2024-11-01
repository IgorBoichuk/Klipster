//import React from 'react';

import { Container } from '../Container';
import Link from 'next/link';
import { NavNenu } from '../NavNenu';

export const Header = () => {
	// const pathname = usePathname().split('/')[1]

	return (
		<header className='sticky top-0 z-[100] bg-cdark border-b py-[12px] xl:py-[24px]'>
			<Container>
				<NavNenu></NavNenu>
			</Container>
		</header>
	);
};
