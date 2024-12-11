'use client';
import Link from 'next/link';
import React from 'react';
import { Container } from './Container';
import { useRouter } from 'next/navigation';

export const ErrorPage = () => {
	const router = useRouter();
	const goBack = () => {
		router.back();
	};
	return (
		<Container>
			<div className='flex flex-col gap-[10px] w-[200px]'>
				<button
					className=''
					onClick={() => {
						goBack();
					}}
				>
					Повернутись назад
				</button>
			</div>
		</Container>
	);
};
