<script context="module">
	export const load = async ({ fetch, page }) => {
		const id = page.params.id;

		if (id) {
			const res = await fetch(`/api/recipes/${id}`);

			if (res.ok) {
				const recipe = await res.json();

				return {
					props: { recipe }
				};
			} else {
				const error = new Error(`The post with ID ${id} was not found`);
				return { status: 404, error };
			}
		}
	};
</script>

<script>
	import marked from 'marked';
	export let recipe;
</script>

<!-- "recipe
"name"
"directions"
"ingredients"
"description"
"createdby"
"image"
"base64image"
"draft"
"recipes
"categories -->

{#if recipe}
	<div>
		{recipe.name}
	</div>
	<div>
		{recipe.description}
	</div>
	<div class="whitespace-pre-line">
		{@html marked(recipe.ingredients)}
	</div>
	<div class="whitespace-pre-line">
		{recipe.directions}
	</div>
{:else}
	<div class="color-error">No recipe found.</div>
{/if}
