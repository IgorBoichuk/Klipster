import Image from 'next/image';
import React from 'react';
import Phone from '/public/svg/phoneblack.svg';
import Viber from '/public/svg/viberblack.svg';
import Telegram from '/public/svg/telegramblack.svg';
import Email from '/public/svg/emailblack.svg';
import Circle from '/public/svg/ellipse.svg';
import Link from 'next/link';

interface SocialsProps {
	custom?: string;
}

export const SocialsContacts = ({ custom }: SocialsProps) => {
	return (
		<div className={` ${custom ? custom : ''} grid grid-cols-2 gap-4 py-12 px-24`}>
			<Link href={'tel:${+380930392656}'} className=' flex gap-2 items-center'>
				<div className='relative'>
					<Image src={Circle} width={50} alt='phone link' className='block w-5 h-5 lg:w-12 lg:h-12 animate-spin' />
					<Image
						src={Phone}
						width={40}
						alt='phone link'
						className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-5 h-5 lg:w-8 lg:h-8'
					/>
				</div>
				<p className='hidden lg:block text-cblack'>+380930392656</p>
			</Link>

			<Link href={'mailto:info.klipster@gmail.com'} target='_blank' className='flex gap-2 items-center'>
				<div className='relative'>
					<Image src={Circle} width={50} alt='phone link' className='block w-5 h-5 lg:w-12 lg:h-12 animate-spin' />
					<Image
						src={Email}
						width={40}
						alt='Email link'
						className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-5 h-5 lg:w-8 lg:h-8 '
					/>
				</div>
				<p className='hidden lg:block text-cblack'>+info.klipster@gmail.com</p>
			</Link>
			<Link href={'viber://chat?number=380930392656'} target='_blank' className='flex gap-2 items-center'>
				<div className='relative'>
					<Image src={Circle} width={50} alt='phone link' className='block w-5 h-5 lg:w-12 lg:h-12 animate-spin' />
					<Image
						src={Viber}
						width={40}
						alt='Viber link'
						className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-5 h-5 lg:w-8 lg:h-8'
					/>
				</div>
				<p className='hidden lg:block text-cblack'>+380930392656</p>
			</Link>
			<Link href={'https://t.me/+380930392656'} target='_blank' className='flex gap-2 items-center'>
				<div className='relative'>
					<Image src={Circle} width={50} alt='phone link' className='block w-5 h-5 lg:w-12 lg:h-12 animate-spin' />
					<Image
						src={Telegram}
						width={40}
						alt='Telegram link'
						className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-5 h-5 lg:w-8 lg:h-8'
					/>
				</div>
				<p className='hidden lg:block text-cblack'>+380930392656</p>
			</Link>
		</div>
	);
};
