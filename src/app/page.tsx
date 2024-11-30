'use client';

import { RecommendedProducts } from '@/shared/RecommendedProducts';
import { AboutUs } from '@/shared/AboutUs';
import { Sections } from '@/shared/Sections';
import Bolt from '../../public/images/bolts.png';

export default function Home() {
	return (
		<div>
			<Sections />
			<RecommendedProducts image={Bolt} title={'Рекомендовані товари'} />
			<AboutUs />
		</div>
	);
}
