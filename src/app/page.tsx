import { RecommendedProducts } from '@/shared/RecommendedProducts';
import Bolt from '../../public/images/bolts.png';
import { AboutUs } from '@/shared/AboutUs';
import { Categories } from '@/shared/Categories';

export default function Home() {
	return (
		<div>
			<Categories />
			<RecommendedProducts image={Bolt} title={'Рекомендовані товари'} />
			<AboutUs />
		</div>
	);
}
