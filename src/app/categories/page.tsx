'use client';

import { useSearchParams } from 'next/navigation';
import useCategories from '../hooks/useCategories';
import { RecommendedProducts } from '@/shared/RecommendedProducts';
import { AllCategories } from '@/shared/AllCategories';
import { Suspense } from 'react';
import { Loader } from '@/shared/Loader';

const Categories = () => {
	const searchParams = useSearchParams();
	const sectionFromUrl = searchParams?.get('section') ?? null;

	// Завантаження категорій може бути асинхронним
	const { filteredCategories } = useCategories(sectionFromUrl);

	return (
		<Suspense fallback={<Loader />}>
			{/* Оскільки useCategories може бути асинхронним, потрібно його обгорнути в Suspense */}
			<AllCategories filteredCategories={filteredCategories} />
			<RecommendedProducts title='Рекомендовані товари' />
		</Suspense>
	);
};

export default Categories;
