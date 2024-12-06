'use client';

import { RecommendedProducts } from '@/shared/RecommendedProducts';
import { AboutUs } from '@/shared/AboutUs';
import { Sections } from '@/shared/Sections';
import Bolt from '../../public/images/bolts.png';
// import { Suspense } from 'react';
// import { Logo } from '@/shared/Logo';

export default function Home() {
	return (
		<div>
			{/* <Suspense fallback={<Logo />}> */}
			<Sections />
			{/* </Suspense> */}
			<RecommendedProducts image={Bolt} title={'Рекомендовані товари'} />
			<AboutUs />
		</div>
	);
}
