'use client';
import Link from 'next/link';
import React from 'react';
import { Container } from './Container';

export const ErrorPage = () => {
	return (
		<Container>
			<div className='flex flex-col gap-[10px] w-[200px]'>
				<Link href='/' className=''>
					<span>Повернутись на головну</span>
				</Link>
			</div>
		</Container>
	);
};
