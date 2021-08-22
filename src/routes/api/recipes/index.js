import { Get } from '$lib/requests';

export async function get({ headers }) {
	const data = await Get(fetch, 'http://localhost:1337/recipes', headers);
	console.log('recipes api', data[0].name);
	return { body: data };
}
