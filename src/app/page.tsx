import { CategoryCard } from '@/shared/CategoryCard';
import { Container } from '@/shared/Container';
import { RecommendedProducts } from '@/shared/RecommendedProducts';
import { SectionTitle } from '@/shared/SectionTitle';
import Bolt from '../../public/images/bolts.png';
import Bolts from '../../public/images/boltstt.png';
import Clips from '../../public/images/clips.jpg';
import Clipses from '../../public/images/clipses.png';
import Clipsest from '../../public/images/clipsest.png';
import { ReviewedGoods } from '@/shared/ReviewedGoods';
import { AboutUs } from '@/shared/AboutUs';
import { Categories } from '@/shared/Categories';

export default function Home() {
	return (
		<Container>
			<Categories />
			<RecommendedProducts image={Bolt} title={'Рекомендовані товари'} />
			<ReviewedGoods image={Bolt} title={'Ви переглядали'} />
			<AboutUs />
		</Container>
	);
}
