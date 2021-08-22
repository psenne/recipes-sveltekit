<!-- <script context="module">
	export const load = async ({ session }) => {
		const isLoggedIn = session.isLoggedIn;

		return {
			props: { isLoggedIn }
		};
	};
</script> -->
<script>
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';

	let authorized = false;
	session.subscribe(({ isLoggedIn }) => (authorized = isLoggedIn));

	function Logout() {
		const loggedOut = fetch('/auth/logout');
		if (loggedOut) {
			$session.isLoggedIn = null;
			goto('/login');
		}
	}
</script>

{#if authorized}
	<button on:click={Logout}>Logout</button>
{:else}
	<a href="http://localhost:1337/connect/google">Login</a>
{/if}
