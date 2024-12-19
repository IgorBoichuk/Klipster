import { useEffect, useState } from 'react';
import { Product } from '@/types';
import fetchProducts from '@/helpers/fetchProducts';
import { useCategory } from '../providers/CategoryContext';
import { usePathname, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
const useProducts = (initialPage = 1, pageSize = 20) => {
	const [products, setProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [totalCount, setTotalCount] = useState<number>(0);
	const [page, setPage] = useState<number>(initialPage);

	const { categorySlug } = useCategory();

	const pathFromUrl = usePathname();
	const currentPath = pathFromUrl?.split('/')[2];
	const searchParams = useSearchParams();

	const router = useRouter();

	useEffect(() => {
		const currentPage = Number(searchParams?.get('page')) || page;
		const currentPageSize = Number(searchParams?.get('pageSize')) || pageSize;
		// router.push(`/categories/${categorySlug}&page=${currentPage}&pageSize=${pageSize}`);

		// const expectedUrl = `/categories/${categorySlug}&page=${page}&pageSize=${currentPageSize}`;
		// if (router.asPath === expectedUrl) {
		// 	router.push(expectedUrl);
		// }

		const loadProducts = async () => {
			try {
				const data = await fetchProducts(
					(categorySlug || currentPath) as string,
					currentPage || page,
					currentPageSize || pageSize
				);

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
	}, [categorySlug, page, pageSize, currentPath, searchParams]);

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
