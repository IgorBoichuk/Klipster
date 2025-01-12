'use client';
import React, { useEffect } from 'react';
import useProducts from '@/app/hooks/useProducts';
import { useCategory } from '@/app/providers/CategoryContext';
import { Articles } from '@/shared/Articles';
import BreadCrumb from '@/shared/BreadCrumb';
import { SectionTitle } from '@/shared/SectionTitle';
import Arrow from '../../../../public/svg/arrow.svg';
import Image from 'next/image';
import { ErrorPage } from '@/shared/ErrorPage';
import { FiltersForCategory } from '@/shared/FiltersForCategory';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Categorypage = () => {
	const { filteredProducts, totalCount, page, onPageChange } = useProducts();
	const { categoryName } = useCategory();

	const pathFromUrl = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();

	const currentPath = pathFromUrl?.split('/')[2];
	const currentPageSize = Number(searchParams?.get('pageSize')) || 40;
	// const currentPage = Number(searchParams?.get('page')) || 1;

	useEffect(() => {
		router.push(`/categories/${currentPath}?page=${page}&pageSize=${currentPageSize}`);
	}, [page]);

	// Обробка зміни сторінки
	const handlePageChange = (newPage: number) => {
		onPageChange(newPage);
	};
	const maxPages = Math.ceil(totalCount / currentPageSize);
	const pagesArray = Array.from({ length: maxPages }, (_, index) => index + 1);

	// console.log(filteredProducts);

	return (
		<div>
			<BreadCrumb />
			{filteredProducts.length === 0 ? (
				<ErrorPage />
			) : (
				<div className=''>
					<SectionTitle title={categoryName} />

					<div className='grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 gap-4'>
						<div className='md:col-span-3 lg:col-span-2'>
							<ul className='grid gap-4'>
								<li>{/* <FiltersForCategory param={filteredProducts.inst} name={'Місце встановлення'} /> */}</li>
							</ul>
						</div>
						<div className='md:col-span-7 lg:col-span-10'>
							<Articles catData={filteredProducts} />
						</div>
					</div>
					{/* Пагінація */}
					<div className='flex justify-end gap-4 py-10'>
						<button
							className=' bg-cblack w-6 h-6 flex justify-center items-center'
							onClick={() => handlePageChange(page - 1)}
							disabled={page === 1}
						>
							<Image src={Arrow} alt='left arrow' width={8} className='rotate-180 ' />
						</button>
						<div className='flex gap-2'>
							{pagesArray.map(ipage => (
								<button
									key={ipage}
									onClick={() => handlePageChange(ipage)}
									disabled={ipage === page}
									className={`${ipage === page && 'font-bold text-xl bg-cyellow px-1 rounded-md'}`}
								>
									{ipage}
								</button>
							))}
						</div>
						<button
							className=' bg-cblack w-6 h-6 flex justify-center items-center'
							onClick={() => handlePageChange(page + 1)}
							disabled={page >= pagesArray.length}
						>
							<Image src={Arrow} alt='right arrow' width={8} className=' ' />
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Categorypage;
