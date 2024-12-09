import { useEffect, useState } from 'react';
import { Product } from '@/types';
import fetchProducts from '@/helpers/fetchProducts';
import { useCategory } from '../providers/CategoryContext';

const useProducts = (initialPage = 1, pageSize = 20) => {
	const [products, setProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [totalCount, setTotalCount] = useState<number>(0);
	const [page, setPage] = useState<number>(initialPage);

	const { category } = useCategory();

	useEffect(() => {
		const loadProducts = async () => {
			try {
				const data = await fetchProducts(category || 'Кріплення обшивки, один капелюшок', page, pageSize);

				if (data?.products) {
					setProducts(data.products);
					setTotalCount(data.totalCount || 0);
				} else {
					console.warn('No products found for category:', category);
				}
			} catch (error) {
				console.error('Failed to fetch products:', error);
			}
		};
		loadProducts();
	}, [page]);

	useEffect(() => {
		if (category) {
			const filtered = products.filter(product => product.category === category);
			setFilteredProducts(filtered);
		} else {
			setFilteredProducts(products);
		}
	}, [category, products]);

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
