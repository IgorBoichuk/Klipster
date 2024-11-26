import { ErrorPage } from '@/shared/ErrorPage';

export async function generateStaticParams() {
	return [{ notFound: ['notFound'] }];
}

const NotFoundPage = () => {
	return <ErrorPage />;
};

export default NotFoundPage;
