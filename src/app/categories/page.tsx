'use client';

import { useSearchParams } from 'next/navigation';
import useCategories from '../hooks/useCategories';
import { RecommendedProducts } from '@/shared/RecommendedProducts';
import { AllCategories } from '@/shared/AllCategories';
import { Suspense, useEffect, useState } from 'react';
import { Loader } from '@/shared/Loader';

const Categories = () => {
	const [, setIsDataLoading] = useState(true);

	const searchParams = useSearchParams();
	const sectionFromUrl = searchParams?.get('section') ?? null;

	const { filteredCategories } = useCategories(sectionFromUrl);

	useEffect(() => {
		if (filteredCategories.length > 0) {
			setIsDataLoading(false);
		}
	}, [filteredCategories]);

	return (
		<Suspense fallback={<Loader />}>
			<AllCategories filteredCategories={filteredCategories} />
			<RecommendedProducts title='Рекомендовані товари' />
		</Suspense>
	);
};

export default Categories;
