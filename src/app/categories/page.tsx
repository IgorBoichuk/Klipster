import React from 'react';
import { RecommendedProducts } from '@/shared/RecommendedProducts';

import Bolt from '../../../public/images/bolts.png';
import { AllCategories } from '@/shared/AllCategories';

const Categories = () => {
	return (
		<div>
			<AllCategories />
			<RecommendedProducts image={Bolt} title={'Рекомендовані товари'} />
		</div>
	);
};
export default Categories;
