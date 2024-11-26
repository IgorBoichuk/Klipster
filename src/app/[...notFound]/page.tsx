import { ErrorPage } from '@/shared/ErrorPage';
import React from 'react';

export async function generateStaticParams() {
	return [{ notFound: ['notFound'] }];
}
export const dynamicParams = true;
const page = () => {
	return <ErrorPage />;
};

export default page;
