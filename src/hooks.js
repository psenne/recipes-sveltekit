import * as cookie from 'cookie';
import { protectedPages } from '$lib/consts.js';

export async function handle({ request, resolve }) {
	const { jwt } = cookie.parse(request.headers.cookie || '');
	console.log('hooks handle:', { jwt });
	if (jwt && jwt !== 'deleted') {
		request.locals.isLoggedIn = true;
	} else {
		request.locals.isLoggedIn = false;
	}

	const response = await resolve(request);

	// if (!request.locals.isLoggedIn && protectedPages.includes(request.path)) {
	// 	return {
	// 		status: 401,
	// 		headers: {
	// 			location: '/'
	// 		}
	// 	};
	// }
	return {
		...response
	};
}

export function getSession(request) {
	const { isLoggedIn } = request.locals;

	return {
		isLoggedIn
	};
}
