import Image from 'next/image';
import React from 'react';
import Car from '../../public/images/car.jpg';

export const AboutUs = () => {
	return (
		<div className='bg-about-us bg-no-repeat bg-contain bg-center md:bg-none md:grid md:grid-cols-2 md:gap-6 md:py-10 lg:py-14 lg:gap-20 md:items-center'>
			<Image src={Car} width={1000} alt='car with clips' className='hidden md:block' />
			<div className=' bg-cwhite bg-opacity-70 md:bg-opacity-0 py-10 md:py-0 text-xl xl:text-2xl 2xl:text-[32px]'>
				<p className='mb-6'>
					KLIPSTER — український інтернет-магазин, який спеціалізується на продажу високоякісних автомобільних кліпс та
					інших кріпильних елементів для вашого авто.
				</p>
				<p className=''>
					Ми пропонуємо широкий вибір продукції, яка відповідає найвищим стандартам якості, щоб ви могли легко знайти та
					замінити необхідні деталі для свого автомобіля. Наші клієнти можуть розраховувати на компетентну підтримку та
					своєчасну доставку.
				</p>
			</div>
		</div>
	);
};
