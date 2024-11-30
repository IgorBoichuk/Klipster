// pages/categories/index.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import useCategories from '../hooks/useCategories';
import { RecommendedProducts } from '@/shared/RecommendedProducts';
import Bolt from '../../../public/images/bolts.png';
import { AllCategories } from '@/shared/AllCategories';
import FilterBySection from '@/shared/FilterBySection';
import { Suspense } from 'react';
import { Logo } from '@/shared/Logo';

const Categories = () => {
	const searchParams = useSearchParams();
	const sectionFromUrl: string | null = searchParams?.get('section') ?? null;

	const { filteredCategories, sections, selectedSection, handleSectionChange } = useCategories(sectionFromUrl);

	return (
		<div>
			<Suspense fallback={<Logo />}>
				<FilterBySection
					sections={sections}
					selectedSection={selectedSection}
					onSelectSection={handleSectionChange}
					filteredCategories={filteredCategories}
					sectionFromUrl={sectionFromUrl}
					section_ua={''}
					section_en={''}
				/>
			</Suspense>
			<AllCategories filteredCategories={filteredCategories} />
			<RecommendedProducts image={Bolt} title='Рекомендовані товари' />
		</div>
	);
};

export default Categories;
