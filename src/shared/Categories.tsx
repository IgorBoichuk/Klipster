import React from 'react';
import { SectionTitle } from './SectionTitle';
import { CategoryCard } from './CategoryCard';
import Bolt from '../../public/images/bolts.png';
import Bolts from '../../public/images/boltstt.png';
import Clips from '../../public/images/clips.jpg';
import Clipses from '../../public/images/clipses.png';

export const Categories = () => {
	return (
		<div className='bg-stone-100'>
			<SectionTitle title='Категорії' />
			<ul className='grid grid-cols-2  gap-[20px] lg:grid-cols-3'>
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
		</div>
	);
};
