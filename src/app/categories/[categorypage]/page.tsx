'use client';
import useProducts from '@/app/hooks/useProducts';
import { Articles } from '@/shared/Articles';
import BreadCrumb from '@/shared/BreadCrumb';
import React from 'react';

const Categorypage = () => {
	const { filteredProducts, totalCount, page, pageSize, isLoading, onPageChange } =
		useProducts('Автомобільні кріплення');

	// Обробка зміни сторінки
	const handlePageChange = (newPage: number) => {
		onPageChange(newPage);
	};

	return (
		<div >
			<BreadCrumb />
			<Articles catData={filteredProducts} isLoading={isLoading} />
			{/* Пагінація */}
			<div className='flex justify-around py-10'>
				<button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
					Попередня сторінка
				</button>
				<span>{page}</span>
				<span>Всього сторінок {Math.ceil(totalCount / pageSize)}</span>
				<button onClick={() => handlePageChange(page + 1)} disabled={page * pageSize >= totalCount}>
					Наступна сторінка
				</button>
			</div>
		</div>
	);
};

export default Categorypage;
