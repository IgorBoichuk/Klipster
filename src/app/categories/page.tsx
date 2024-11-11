import { Container } from '@/shared/Container';

import React from 'react';
import { RecommendedProducts } from '@/shared/RecommendedProducts';

import Bolt from '../../../public/images/bolts.png';
import { AllCategories } from '@/shared/AllCategories';

const Categories = () => {
	return (
		<Container>
			<AllCategories />
			<RecommendedProducts image={Bolt} title={'Рекомендовані товари'} />
		</Container>
	);
};
export default Categories;
