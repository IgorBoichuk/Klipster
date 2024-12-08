'use client';

import { useSearchParams } from 'next/navigation';
import useCategories from '../hooks/useCategories';
import { RecommendedProducts } from '@/shared/RecommendedProducts';
import { AllCategories } from '@/shared/AllCategories';

const Categories = () => {
	const searchParams = useSearchParams();
	const sectionFromUrl = searchParams?.get('section') ?? null;

	// Завантаження категорій може бути асинхронним
	const { filteredCategories } = useCategories(sectionFromUrl);

	return (
		<>
			<AllCategories filteredCategories={filteredCategories} />
			<RecommendedProducts title='Рекомендовані товари' />
		</>
	);
};

export default Categories;
