import { useEffect, useState } from 'react';
import { Product } from '@/types';
import fetchCategories from '@/helpers/fetchCategories';

const useProducts = (initialCategory: string | null) => {
	const [category, setCategory] = useState<string | null>(initialCategory); // Зберігаємо обрану категорію
	const [products, setProducts] = useState<Product[]>([]); // Всі товари
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Відфільтровані товари

	useEffect(() => {
		// Завантажуємо всі товари з бази
		const loadProducts = async () => {
			const data = await fetchCategories<Product>({ table: 'partsitems' });
			if (data) {
				setProducts(data); // Зберігаємо всі товари
			}
		};
		loadProducts();
	}, []);

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
		console.log('Chosen category:', catName);
	};

	return { products, filteredProducts, category, onCategoryChoose };
};

export default useProducts;
