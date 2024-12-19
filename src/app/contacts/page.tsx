import { SectionTitle } from '@/shared/SectionTitle';
import { Socials } from '@/shared/Socials';

import React from 'react';

const Contacts = () => {
	return (
		<div>
			<SectionTitle title='Contacts' />
			<p>Ми завжди на зв’язку, щоб допомогти вам з вибором та відповісти на всі ваші запитання!</p>
			<div className='border bg-slate-700'>
				<Socials custom=' lg:grid grid-cols-2 gap-y-4' />
			</div>
			<p>
				Наші фахівці готові допомогти з будь-якими питаннями стосовно товарів, оформлення замовлення та доставки.
				Звертайтесь – ми на зв’язку!
			</p>
		</div>
	);
};
export default Contacts;
