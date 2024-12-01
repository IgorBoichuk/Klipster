import React from 'react';
import LoaderImg from '../../public/images/avatar/avatar4.svg';
import Image from 'next/image';

export const Loader = () => {
	return <Image src={LoaderImg} alt='Loader' className='absolute left-1/2 top-1/2 w-20 h-20' />;
};
