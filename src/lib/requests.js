import * as cookie from 'cookie';

export async function Get(fetch, url, headers) {
	const cookies = headers.cookie ? cookie.parse(headers.cookie) : {};
	const auth = cookies.jwt ? { Authorization: `Bearer ${cookies.jwt}` } : {};
	const res = await fetch(url, {
		headers: auth
	});
	const data = await res.json();

	if (res.ok) {
		return data;
	} else if (res.status === 401) {
		throw new Error('Not authorized');
	} else {
		throw new Error(data);
	}
}
