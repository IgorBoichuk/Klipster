'use client';

import { RecommendedProducts } from '@/shared/RecommendedProducts';
import { AboutUs } from '@/shared/AboutUs';
import { Sections } from '@/shared/Sections';
// import Avatar from '../../public/images/avatar/avatar2.png';
// import { Suspense } from 'react';
// import { Logo } from '@/shared/Logo';

export default function Home() {
	return (
		<div>
			{/* <Suspense fallback={<Avatar />}> */}
			<Sections />
			{/* </Suspense> */}
			<RecommendedProducts title={'Рекомендовані товари'} />
			<AboutUs />
		</div>
	);
}
