'use client';

import { useSearchParams } from 'next/navigation';
import useCategories from '../hooks/useCategories';
import { RecommendedProducts } from '@/shared/RecommendedProducts';
import { AllCategories } from '@/shared/AllCategories';
import FilterBySection from '@/shared/FilterBySection';

const Categories = () => {
	const searchParams = useSearchParams();
	const sectionFromUrl = searchParams?.get('section') ?? null;

	// Завантаження категорій може бути асинхронним
	const { filteredCategories } = useCategories(sectionFromUrl);

	return (
		<>
			<div className='grid grid-cols-1 lg:grid-cols-7 gap-4'>
				<div className='hidden lg:block col-span-1'>
					<FilterBySection />
				</div>
				<div className='col-span-6'>
					<AllCategories filteredCategories={filteredCategories} />
				</div>
			</div>
			<RecommendedProducts title='Рекомендовані товари' />
		</>
	);
};

export default Categories;
