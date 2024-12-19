import { Container } from '@/shared/Container';
import { SectionTitle } from '@/shared/SectionTitle';
import React from 'react';

const Delivery = () => {
	return (
		<Container>
			<div>
				<SectionTitle title='Оплата і доставка' />
			</div>
			<p className='  font-bold'>Доставка:</p>
			<p className=' p-1'>
				Відправка по будням. При замовленні і оплаті замовлення до 10:00 відправка відбудеться в той же день, якщо
				пізніше то відправимо на наступний день.
			</p>
			<p className=' p-1'>Всі замовлення збираються та упаковуються на нашому складі.</p>
			<p className=' p-1'>Використовуємо власні пакувальні матеріали.</p>
			<p className=' p-1 font-bold'>Післяплата - відсутня.</p>
			<p className=' p-1'>
				Відправляємо тільки по факту повної оплати згідно реквізитів на рахунок ФОП, або через LiqPay на сайті.
			</p>
			<p className=' p-1'>
				Усі тарифи згідно з умовами доставки поштового оператора. Нова Пошта. Безкоштовно при вартості замовлення від
				1000 ₴.
			</p>
			<p className=' font-bold'>Способи оплати:</p>
			<p className=' p-1'>
				Оплата на рахунок. Оплата по реквізитах для фізичних та юридичних осіб Реквізити на оплату:
			</p>
			<p className=' p-1'>Отримувач ФОП "БОЙЧУК Т.О.</p>
			<p className=' p-1'>IBAN UA483052990000026004025026659</p>
			<p className=' p-1'>РНОКПП/ЄДРПОУ 3158800560</p>
			<p className=' p-1 font-bold'>Призначення платежу: За автотовари</p>
			<p className=' p-1'>Після оплати по реквізитам обов'язково скинути скрін оплати на вайбер</p>
		</Container>
	);
};
export default Delivery;
