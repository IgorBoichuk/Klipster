import { CategoryCard } from '@/shared/CategoryCard';
import { Container } from '@/shared/Container';
import { RecommendedProducts } from '@/shared/RecommendedProducts';
import { SectionTitle } from '@/shared/SectionTitle';
import Bolt from '../../public/images/bolts.png';
import Bolts from '../../public/images/boltstt.png';
import Clips from '../../public/images/clips.jpg';
import Clipses from '../../public/images/clipses.png';
import Clipsest from '../../public/images/clipsest.png';

export default function Home() {
	return (
		<Container>
			<div className=''>
				<SectionTitle title='Категорії' />
			</div>
			<ul className='grid grid-cols-2 gap-[20px] lg:grid-cols-3'>
				<li>
					<CategoryCard title='Болти' image={Bolt} />
				</li>
				<li>
					<CategoryCard title='Кліпси' image={Bolts} />
				</li>
				<li>
					<CategoryCard title='Закладні гайки' image={Clips} />
				</li>
				<li>
					<CategoryCard title='Втуки' image={Clipses} />
				</li>
			</ul>
			<div>
				<SectionTitle title='Рекомендовані  товари' />
			</div>
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
		</Container>
	);
}
