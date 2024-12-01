'use client';
import useProducts from '@/app/hooks/useProducts';
import { Articles } from '@/shared/Articles';
import BreadCrumb from '@/shared/BreadCrumb';
import React from 'react';

const Categorypage = () => {
	const { products } = useProducts('');
	return (
		<div>
			<BreadCrumb />
			<Articles catData={products} />
		</div>
	);
};

export default Categorypage;
