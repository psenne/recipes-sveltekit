import { Get } from '$lib/requests';

export async function get(req) {
	const id = req.params.id;
	const headers = req.headers;
	const data = await Get(fetch, `http://localhost:1337/recipes/${id}`, headers);
	return { body: data };
}
