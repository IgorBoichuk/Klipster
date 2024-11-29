'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import useCategories from '../../hooks/useCategories';
import { RecommendedProducts } from '@/shared/RecommendedProducts';
import Bolt from '../../../../public/images/bolts.png';
import { AllCategories } from '@/shared/AllCategories';

const Sections = () => {
	const searchParams = useSearchParams();
	const sectionFromUrl: string | null = searchParams?.get('section') ?? null;

	const { filteredCategories, sections, selectedSection, handleSectionChange } = useCategories(sectionFromUrl);
	console.log(filteredCategories);

	return (
		<div>
			<AllCategories filteredCategories={filteredCategories} />
			<RecommendedProducts image={Bolt} title='Рекомендовані товари' />
		</div>
	);
};

export default Sections;
