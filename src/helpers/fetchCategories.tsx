import axios from 'axios';

interface FetchDataParams {
	table: string;
}

const fetchCategories = async <T,>({ table }: FetchDataParams): Promise<T[] | undefined> => {
	try {
		const response = await axios.get('/api/getData', {
			params: { table },
		});
		return response.data;
	} catch (error) {
		console.error(`Error fetching data from ${table}:`, error);
		return undefined;
	}
};

export default fetchCategories;
