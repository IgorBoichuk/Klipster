import React from 'react';
import LogoImg from '../../public/logo/logo.svg';
import Image from 'next/image';

export const Logo = () => {
	return <Image src={LogoImg} fill={true} alt='logo klipster' className=' ' />;
};
