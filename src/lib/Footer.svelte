<script>
	import LoginLogoutButton from './LoginLogoutButton.svelte';
	export let classes = '';
</script>

<footer class={`${classes} p-16 bg-warm-gray-200 text-black flex justify-between`}>
	<a href="https://recipes.mjparker.com/">Original website</a>
	<a href="http://localhost:1337/admin">Admin</a>
	<LoginLogoutButton />
</footer>

<style>
	a:hover {
		opacity: 0.5;
	}
</style>
