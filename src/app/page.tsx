'use client';

import { RecommendedProducts } from '@/shared/RecommendedProducts';
import { AboutUs } from '@/shared/AboutUs';
import { Sections } from '@/shared/Sections';

export default function Home() {
	return (
		<div>
			<Sections />
			<RecommendedProducts title={'Рекомендовані товари'} />
			<AboutUs />
		</div>
	);
}
