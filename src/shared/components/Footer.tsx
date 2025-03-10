import Link from 'next/link';
import { Container } from '../Container';
import { NavMenu } from '../NavMenu';
import { Socials } from '../Socials';
import { Logo } from '../Logo';

export const Footer = () => {
	return (
		<footer className=' bg-cdark border-b py-[12px] xl:py-[24px] border-2'>
			<Container>
				<div className='grid grid-cols-2 lg:flex justify-between'>
					<div className='flex flex-col gap-3 justify-between'>
						<Link
							href={'/'}
							className='relative block w-[102px] h-[46px] xl:w-[180px] xl:h-[80px] 2xl:w-[231px] 2xl:h-[103px]'
						>
							<Logo />
						</Link>
						<Socials custom='lg:hidden grid grid-cols-4 gap-3 w-max' />
					</div>
					<div className='flex flex-col lg:flex-row gap-3 justify-center'>
						<NavMenu footer custom={''} />
						<Socials custom='hidden lg:grid grid-cols-2 gap-y-4' />
					</div>
				</div>
			</Container>
		</footer>
	);
};
