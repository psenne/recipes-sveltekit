import { Get } from '$lib/requests';

export async function get({ headers }) {
	const data = await Get(fetch, 'http://localhost:1337/users/me', headers);
	return { body: data };
}
