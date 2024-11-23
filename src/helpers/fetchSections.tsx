export const fetchSections = async () => {
	try {
		const response = await fetch('/api/getData?table=categories');
		const data = await response.json();

		// Перевірка, чи data є масивом
		if (Array.isArray(data)) {
			return data;
		} else {
			console.error('Data is not an array', data);
			return [];
		}
	} catch (error) {
		console.error('Error fetching products:', error);
		return [];
	}
};
