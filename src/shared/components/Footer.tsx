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
				<div className='grid grid-cols-2 lg:flex justify-between'>
					<div className='flex flex-col gap-3'>
						<Link
							href={'/'}
							className='relative block w-[102px] h-[46px] xl:w-[180px] xl:h-[80px] 2xl:w-[231px] 2xl:h-[103px]'
						>
							<Image src={Logo} fill={true} priority={true} alt='logo klipster' />
						</Link>
						<Socials custom='lg:hidden grid grid-cols-4 gap-3 w-max' />
					</div>
					<div className='flex flex-col lg:flex-row gap-3'>
						<NavMenu footer />
						<Socials custom='hidden lg:grid grid-cols-2 gap-x-8 gap-y-3 w-max' />
					</div>
				</div>
			</Container>
		</footer>
	);
};
