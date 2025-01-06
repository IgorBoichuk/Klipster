import { useEffect, useState } from 'react';
import { Product } from '@/types';
import fetchSingleProduct from '@/helpers/fetchSingleProduct';
import { useCategory } from '../providers/CategoryContext';
import { usePathname } from 'next/navigation';

const useSingleProduct = () => {
	const [singleProduct, setSingleProduct] = useState<Product | null>(null);

	const { categorySlug } = useCategory();
	const pathFromUrl = usePathname();

	useEffect(() => {
		const catSlug = pathFromUrl?.split('/')[2];
		const partName = pathFromUrl?.split('/')[3];
		const partId = partName?.split('-')[1];

		if (!catSlug || !partId) {
			console.warn('Missing category slug or product ID in the URL');
			return;
		}

		const loadProduct = async () => {
			try {
				const product = await fetchSingleProduct(catSlug, parseInt(partId, 10));
				setSingleProduct(product); // Оновлюємо стан об'єктом продукту
			} catch (error) {
				console.error('Failed to fetch single product:', error);
			}
		};

		loadProduct();
	}, [pathFromUrl, categorySlug]);

	return {
		singleProduct,
	};
};

export default useSingleProduct;
