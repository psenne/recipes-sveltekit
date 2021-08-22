export function get() {
	console.log('logout script');
	return {
		headers: {
			'set-cookie': ['jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT', 'user=none; path=/auth/google; expires=Thu, 01 Jan 1970 00:00:00 GMT']
		},
		body: {
			logout: true
		}
	};
}
