'use client';

import { useSearchParams } from 'next/navigation';
import useCategories from '../hooks/useCategories';
import { RecommendedProducts } from '@/shared/RecommendedProducts';
import { AllCategories } from '@/shared/AllCategories';
import { useEffect, useState } from 'react';

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
		<div>
			<AllCategories filteredCategories={filteredCategories} />
			<RecommendedProducts title='Рекомендовані товари' />
		</div>
	);
};

export default Categories;
