import Link from 'next/link';
import { Container } from '../Container';
import { NavMenu } from '../NavMenu';
import Image from 'next/image';
import Logo from '../../../public/logo/logo.svg';
import { Socials } from '../Socials';

export const Footer = () => {
	return (
		<footer className=' bg-cdark border-b py-[12px] xl:py-[24px] border-2'>
			<Container>
				<div className='grid grid-cols-2'>
					<div className='flex flex-col gap-3'>
						<Link href={'/'} className='block w-[102px] lg:w-[231px]'>
							<Image src={Logo} width={500} height={500} priority={true} alt='logo klipster' className=' ' />
						</Link>
						<Socials custom='lg:hidden grid grid-cols-4 gap-3 w-max' />
					</div>
					<div className='flex flex-col gap-3'>
						<NavMenu footer />
						<Socials custom='hidden lg:grid grid-cols-2 gap-x-8 gap-y-3 w-max' />
					</div>
				</div>
			</Container>
		</footer>
	);
};
