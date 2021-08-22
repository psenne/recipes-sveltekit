<input
	type="text"
	class="text-black w-100 p-4 focus:shadow-inner rounded"
	placeholder="Search recipes"
	on:keydown={(ev) => {
		location.href = '/recipes';
	}}
/>
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline relative text-black right-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
