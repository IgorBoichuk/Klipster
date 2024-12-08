import { useEffect, useState } from 'react';
import { Product } from '@/types';
import fetchProducts from '@/helpers/fetchProducts';

const useProducts = (initialCategory: string | null, initialPage = 1, pageSize = 20) => {
	const [category, setCategory] = useState<string | null>(initialCategory); // Зберігаємо обрану категорію
	const [products, setProducts] = useState<Product[]>([]); // Всі товари
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Відфільтровані товари
	const [totalCount, setTotalCount] = useState<number>(0); // Загальна кількість товарів
	const [page, setPage] = useState<number>(initialPage); // Поточна сторінка

	useEffect(() => {
		// Завантажуємо товари з бази
		const loadProducts = async () => {
			try {
				const data = await fetchProducts(category || 'Автомобільні кріплення', page, pageSize);
				if (data) {
					setProducts(data.products); // Зберігаємо всі товари
					setTotalCount(data.totalCount); // Зберігаємо загальну кількість товарів
				}
			} catch (error) {
				console.error('Failed to fetch products:', error);
			}
		};
		loadProducts();
	}, [category, page, pageSize]);

	useEffect(() => {
		// Кожного разу, коли змінюється обрана категорія, фільтруємо товари
		if (category) {
			const filtered = products.filter(product => product.category === category);
			setFilteredProducts(filtered);
		} else {
			setFilteredProducts(products); // Якщо категорія не обрана, повертаємо всі товари
		}
	}, [category, products]);

	// Функція для вибору категорії
	const onCategoryChoose = (catName: string | null) => {
		setCategory(catName); // Зберігаємо обрану категорію
		setPage(1); // Скидаємо сторінку на першу
		console.log('Chosen category:', catName);
	};

	// Функція для зміни сторінки
	const onPageChange = (newPage: number) => {
		setPage(newPage); // Оновлюємо поточну сторінку
	};

	return {
		products,
		filteredProducts,
		totalCount,
		category,
		page,
		pageSize,
		onCategoryChoose,
		onPageChange,
	};
};

export default useProducts;
