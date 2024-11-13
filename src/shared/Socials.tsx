import Image from 'next/image';
import React from 'react';
import Phone from '../../public/svg/phone.svg';
import Viber from '../../public/svg/viber.svg';
import Telegram from '../../public/svg/telegram.svg';
import Email from '../../public/svg/email.svg';
import Link from 'next/link';

interface SocialsProps {
	custom?: string;
}

export const Socials = ({ custom }: SocialsProps) => {
	return (
		<div className={` ${custom ? custom : ''}`}>
			<Link href={'tel:${+380930392656}'} className='flex gap-2'>
				<Image src={Phone} width={40} alt='phone link' className='block w-5 h-5 lg:w-6 lg:h-6' />
				<p className='hidden lg:block text-cwhite'>+380930392656</p>
			</Link>
			<Link href={'mailto:${info.klipster@gmail.com}'} target='_blank' className='flex gap-2'>
				<Image src={Email} width={40} alt='Email link' className='block w-5 h-5 lg:w-6 lg:h-6' />
				<p className='hidden lg:block text-cwhite'>+info.klipster@gmail.com</p>
			</Link>
			<Link href={'viber://chat?number=380930392656'} target='_blank' className='flex gap-2'>
				<Image src={Viber} width={40} alt='Viber link' className='block w-5 h-5 lg:w-6 lg:h-6' />
				<p className='hidden lg:block text-cwhite'>+380930392656</p>
			</Link>
			<Link href={'https://t.me/+380930392656'} target='_blank' className='flex gap-2'>
				<Image src={Telegram} width={40} alt='Telegram link' className='block w-5 h-5 lg:w-6 lg:h-6' />
				<p className='hidden lg:block text-cwhite'>+380930392656</p>
			</Link>
		</div>
	);
};
