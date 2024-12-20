import { SectionTitle } from '@/shared/SectionTitle';
import { SocialsContacts } from '@/shared/SocialsContacts';

import React from 'react';

const Contacts = () => {
	return (
		<div>
			<SectionTitle title='Контакти' />
			<p className='text-2xl text-center pb-4'>
				Ми завжди на зв&apos;язку, щоб допомогти вам з вибором та відповісти на всі ваші запитання!
			</p>
			<div className='border'>
				<SocialsContacts />
			</div>
			<p className='text-xl text-center py-4'>
				Наші фахівці готові допомогти з будь-якими питаннями стосовно товарів, оформлення замовлення та доставки.
			</p>
			<p className='text-xl text-center pb-4'>Звертайтесь – ми на зв&apos;язку!</p>
		</div>
	);
};
export default Contacts;
