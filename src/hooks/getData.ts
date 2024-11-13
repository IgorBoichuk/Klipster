export async function fetchPartsfromBase() {
	try {
		const response = await fetch('https://api.vercel.app/blog');

		if (!response.ok) {
			throw new Error(`Помилка: ${response.statusText}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Не вдалося завантажити дані:', error);
		return null;
	}
}
