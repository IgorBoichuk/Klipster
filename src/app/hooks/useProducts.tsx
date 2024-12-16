import { useEffect, useState } from 'react';
import { Product } from '@/types';
import fetchProducts from '@/helpers/fetchProducts';
import { useCategory } from '../providers/CategoryContext';
import { usePathname } from 'next/navigation';

const useProducts = (initialPage = 1, pageSize = 20) => {
	const [products, setProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [totalCount, setTotalCount] = useState<number>(0);
	const [page, setPage] = useState<number>(initialPage);

	const { categorySlug } = useCategory();

	const pathFromUrl = usePathname();
	const currentPath = pathFromUrl?.split('/')[2];
	const currentPage = pathFromUrl?.split('&page=')[1];

	useEffect(() => {
		const loadProducts = async () => {
			try {
				const data = await fetchProducts((categorySlug || currentPath) as string, page, pageSize);

				if (data?.products) {
					setProducts(data.products);
					setTotalCount(data.totalCount || 0);
				} else {
					console.warn('No products found for category:', categorySlug);
				}
			} catch (error) {
				console.error('Failed to fetch products:', error);
			}
		};
		loadProducts();
	}, [categorySlug, page, pageSize]);

	useEffect(() => {
		if (categorySlug) {
			const filtered = products.filter(product => product.category_slug === categorySlug);
			setFilteredProducts(filtered);
		} else {
			setFilteredProducts(products);
		}
	}, [categorySlug, products]);

	const onPageChange = (newPage: number) => {
		setPage(newPage);
	};

	return {
		products,
		filteredProducts,
		totalCount,
		page,
		pageSize,
		onPageChange,
	};
};

export default useProducts;
