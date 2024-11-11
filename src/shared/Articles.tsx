import React from 'react';
import { ProductCard } from './ProductCard';
import Bolts from '../../public/images/boltstt.png';

export const Articles = () => {
	return (
		<div className='App'>
			<ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 items-center justify-center'>
				<li className='h-full'>
					<ProductCard title='Кліпса кріплення обшивки MAK' image={Bolts} />
				</li>
				<li className='h-full'>
					<ProductCard title='Кліпса кріплення обшивки MAK' image={Bolts} />
				</li>
				<li className='h-full'>
					<ProductCard title='Кліпса кріплення обшивки MAK' image={Bolts} />
				</li>
				<li className='h-full'>
					<ProductCard title='Кліпса кріплення обшивки MAK' image={Bolts} />
				</li>
				<li className='h-full'>
					<ProductCard title='Кліпса кріплення обшивки MAK' image={Bolts} />
				</li>
				<li className='h-full'>
					<ProductCard title='Кліпса кріплення обшивки MAK' image={Bolts} />
				</li>
			</ul>
		</div>
	);
};
