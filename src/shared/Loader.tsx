import React from 'react';
import LoaderImg from '../../public/images/loaders/loader_nut2.png';
import Image from 'next/image';

export const Loader = () => {
	return <Image src={LoaderImg} alt='Loader' />;
};
