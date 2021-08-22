// /auth/google/redirect
import * as cookie from 'cookie';

export async function get(req) {
	const access_token = req.query.get('access_token');
	const url = `http://localhost:1337/auth/google/callback?access_token=${access_token}`;
	const res = await fetch(url);
	const data = await res.json();
	const jwtheader = cookie.serialize('jwt', data.jwt, {
		httpOnly: true,
		maxAge: 60 * 60 * 24 * 7,
		path: '/'
	});

	return {
		status: 302,
		headers: {
			'set-cookie': [jwtheader, `user=${data.user.email}`],
			location: '/'
		},
		body: {
			user: data.user.email
		}
	};
}
