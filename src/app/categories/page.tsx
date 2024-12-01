'use client';

import { useSearchParams } from 'next/navigation';
import useCategories from '../hooks/useCategories';
import { RecommendedProducts } from '@/shared/RecommendedProducts';
import Bolt from '../../../public/images/bolts.png';
import { AllCategories } from '@/shared/AllCategories';
import FilterBySection from '@/shared/FilterBySection';
import { Suspense, useEffect, useState } from 'react';
import { Loader } from '@/shared/Loader';

const Categories = () => {
	const [isDataLoading, setIsDataLoading] = useState(true);

	const searchParams = useSearchParams();
	const sectionFromUrl = searchParams?.get('section') ?? null;

	const { filteredCategories, sections, selectedSection, handleSectionChange } = useCategories(sectionFromUrl);

	useEffect(() => {
		if (filteredCategories.length > 0) {
			setIsDataLoading(false);
		}
	}, [filteredCategories]);

	return (
		<div>
			<Suspense>
				{isDataLoading ? (
					<Loader />
				) : (
					<FilterBySection
						sections={sections}
						selectedSection={selectedSection}
						onSelectSection={handleSectionChange}
						filteredCategories={filteredCategories}
						sectionFromUrl={sectionFromUrl}
						section_ua={''} // При необхідності, встановіть правильне значення
						section_en={''} // Аналогічно для section_en
					/>
				)}
			</Suspense>

			<AllCategories filteredCategories={filteredCategories} />
			<RecommendedProducts image={Bolt} title='Рекомендовані товари' />
		</div>
	);
};

export default Categories;
