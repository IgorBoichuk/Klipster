// pages/categories/index.tsx
'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import useCategories from '../hooks/useCategories';
import { RecommendedProducts } from '@/shared/RecommendedProducts';
import Bolt from '../../../public/images/bolts.png';
import { AllCategories } from '@/shared/AllCategories';
import FilterBySection from '@/shared/FilterBySection';

const Categories = () => {
	const searchParams = useSearchParams();
	const sectionFromUrl: string | null = searchParams?.get('section') ?? null;

	const { filteredCategories, sections, selectedSection, handleSectionChange } = useCategories(sectionFromUrl);

	return (
		<div>
			<FilterBySection
				sections={sections}
				selectedSection={selectedSection}
				onSelectSection={handleSectionChange}
				filteredCategories={filteredCategories}
				sectionFromUrl={sectionFromUrl}
				section_ua={''}
				section_en={''}
			/>
			<AllCategories filteredCategories={filteredCategories} />
			<RecommendedProducts image={Bolt} title='Рекомендовані товари' />
		</div>
	);
};

export default Categories;
