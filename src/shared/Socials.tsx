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
			<Link href={'tel:${+380930392656}'} className='relative flex w-max h-5 lg:w-6 lg:h-6 '>
				<Image src={Phone} fill={true} alt='phone link'></Image>
				<p className='hidden lg:block text-cwhite'>+380930392656</p>
			</Link>
			<Link href={'mailto:${info.klipster@gmail.com}'} className='relative block w-5 h-5 lg:w-6 lg:h-6'>
				<Image src={Email} fill={true} alt='phone link'></Image>
				<p className='hidden lg:block text-cwhite'>+info.klipster@gmail.com</p>
			</Link>
			<Link href={'viber://chat?number=380930392656'} className='relative block w-5 h-5 lg:w-6 lg:h-6'>
				<Image src={Viber} fill={true} alt='phone link'></Image>
				<p className='hidden lg:block text-cwhite'>+380930392656</p>
			</Link>
			<Link href={'https://t.me/+380930392656'} className='relative block w-5 h-5 lg:w-8 lg:w-6 lg:h-6'>
				<Image src={Telegram} fill={true} alt='phone link'></Image>
				<p className='hidden lg:block text-cwhite'>+380930392656</p>
			</Link>
		</div>
	);
};
