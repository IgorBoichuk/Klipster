import { ErrorPage } from '@/shared/ErrorPage';
import { Suspense } from 'react';

export async function generateStaticParams() {
	return [{ notFound: ['notFound'] }];
}

const NotFoundPage = () => {
	return (
		<Suspense>
			<ErrorPage />
		</Suspense>
	);
};

export default NotFoundPage;
