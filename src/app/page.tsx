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

			<div className='bg-stone-100'>
				<SectionTitle title='Рекомендовані товари' />
				<ul className='grid grid-cols-3 gap-[20px]'>
					<li>
						<RecommendedProducts image={Bolt} />
					</li>
					<li>
						<RecommendedProducts image={Bolts} />
					</li>
					<li>
						<RecommendedProducts image={Clips} />
					</li>
					<li>
						<RecommendedProducts image={Clipses} />
					</li>
					<li>
						<RecommendedProducts image={Clipsest} />
					</li>
					<li>
						<RecommendedProducts image={Clips} />
					</li>
				</ul>
			</div>
			<div className='bg-stone-100'>
				<SectionTitle title='Ви переглядали' />
				{/* <ul className='grid grid-cols-3 gap-[20px] pb-3'>
					<li>
						<ReviewedGoods image={Bolt} />
					</li>
					<li>
						<ReviewedGoods image={Clipses} />
					</li>
					<li>
						<ReviewedGoods image={Bolts} />
					</li>
				</ul> */}
			</div>
			<div>
				<AboutUs />
			</div>
		</Container>
	);
}
