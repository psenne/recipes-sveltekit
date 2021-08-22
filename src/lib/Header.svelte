<script>
	import Logo from '$lib/Logo.svelte';
	export let classes = '';
</script>

<header class={`${classes} block items-center md:flex md:flex-row md:flex-nowrap md:justify-between p-4`}>
	<Logo />
	<slot />
</header>
