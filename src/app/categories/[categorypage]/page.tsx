'use client';
import React from 'react';
import useProducts from '@/app/hooks/useProducts';
import { useCategory } from '@/app/providers/CategoryContext';
import { Articles } from '@/shared/Articles';
import BreadCrumb from '@/shared/BreadCrumb';
import { SectionTitle } from '@/shared/SectionTitle';
import Arrow from '../../../../public/svg/arrow.svg';
import Image from 'next/image';
import { ErrorPage } from '@/shared/ErrorPage';

const Categorypage = () => {
	const { filteredProducts, totalCount, page, pageSize, onPageChange } = useProducts();
	const { category } = useCategory();

	// Обробка зміни сторінки
	const handlePageChange = (newPage: number) => {
		onPageChange(newPage);
	};
	const maxPages = Math.ceil(totalCount / pageSize);
	const pagesArray = Array.from({ length: maxPages }, (_, index) => index + 1);

	return (
		<div>
			<BreadCrumb />
			{filteredProducts.length === 0 ? (
				<ErrorPage />
			) : (
				<div>
					<SectionTitle title={category} />
					<Articles catData={filteredProducts} />
					{/* Пагінація */}

					<div className='flex justify-end gap-4 py-10'>
						<button
							className=' bg-cblack w-6 h-6 flex justify-center items-center'
							onClick={() => handlePageChange(page - 1)}
							disabled={page === 1}
						>
							<Image src={Arrow} alt='down arrow' width={8} className='rotate-180 ' />
						</button>
						<span>{page}</span>

						<div className='flex gap-1'>
							{pagesArray.map(page => (
								<button key={page} onClick={() => handlePageChange(page)} className=''>
									{page}
								</button>
							))}
						</div>
						<button
							className=' bg-cblack w-6 h-6 flex justify-center items-center'
							onClick={() => handlePageChange(page + 1)}
							disabled={page * pageSize >= totalCount}
						>
							<Image src={Arrow} alt='down arrow' width={8} className=' ' />
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Categorypage;
