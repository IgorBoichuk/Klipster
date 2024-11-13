import { Container } from '@/shared/Container';
import { RecommendedProducts } from '@/shared/RecommendedProducts';
import Bolt from '../../public/images/bolts.png';
// import Bolts from '../../public/images/boltstt.png';
// import Clips from '../../public/images/clips.jpg';
// import Clipses from '../../public/images/clipses.png';
// import Clipsest from '../../public/images/clipsest.png';

import { AboutUs } from '@/shared/AboutUs';
import { Categories } from '@/shared/Categories';

// async function fetchData() {
// 	const res = await fetch('109.94.209.168');
// 	const data = await res.json();

// 	return data;
// }

// export default async function ExamplePage() {
// 	const data = await fetchData();
// 	console.log(data);

export default function Home() {
	return (
		<Container>
			<Categories />
			<RecommendedProducts image={Bolt} title={'Рекомендовані товари'} />
			<AboutUs />
		</Container>
	);
}
