<script context="module">
	export const load = async ({ fetch, session }) => {
		const isLoggedIn = session.isLoggedIn;
		console.log('recipes.svelte:', { isLoggedIn });
		if (isLoggedIn) {
			const res = await fetch('/api/recipes');
			const recipes = await res.json();
			console.log('recipes.svelte:', recipes[0].name);
			return {
				props: { recipes }
			};
		} else {
			return { redirect: '/login', status: 302 };
		}
	};
</script>

<script>
	import { parseISO, formatDistance } from 'date-fns';
	export let recipes = [];
</script>

<div class="m-1 grid auto-cols-fr auto-rows-min gap-1 md:gap-2 lg:gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
	{#each recipes as recipe (recipe.id)}
		<div class=" rounded overflow-hidden border bg-white mx-1 my-3">
			<div class="p-3">
				<span class="pt-1 ml-2 font-bold text-sm">
					<a href={`/recipes/${recipe.id}`}>
						{recipe.name}
					</a>
				</span>
			</div>
			{#if recipe.image}
				<img class="h-300px w-full object-cover" src={`http://localhost:1337${recipe.image.url}`} alt={`[${recipe.name}]`} />
			{:else}
				<img class="h-300px w-full bg-cover" src="https://fakeimg.pl/200x200" alt="[Food]" />
			{/if}

			<div class="px-3 pb-2">
				<div class="pt-2">
					<i class="far fa-heart cursor-pointer" />
					<span class="text-sm text-gray-400 font-medium">Created by {recipe.author.username} {formatDistance(parseISO(recipe.created_at), new Date(), { addSuffix: true })}</span>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.recipes {
		min-width: 300px;
	}
</style>
