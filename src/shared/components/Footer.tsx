import { Container } from '../Container';
import { NavMenu } from '../NavMenu';

export const Footer = () => {
	return (
		<footer className=' bg-cdark border-b py-[12px] xl:py-[24px] border-2'>
			<Container>
				<NavMenu footer />
			</Container>
		</footer>
	);
};
