<script>
	import 'virtual:windi.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>Parker's Recipes</title>
</svelte:head>

<div>
	<Header classes="bg-gradient-to-r to-gray-200 via-blue-400 from-blue-300 text-gray-100" />
	<slot />
	<Footer />
</div>
