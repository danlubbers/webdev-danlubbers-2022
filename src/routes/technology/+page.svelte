<script>
	import technologies from '$lib/data/technology.json';
</script>

<div class="w-full h-1/2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-items-center">
	{#each technologies as { name, logo }}
		<div class="my-6 flex flex-col justify-center items-center">
			<img width="50" src={logo} alt={name} />
			<p class="mt-4 text-center">{name}</p>
		</div>
	{/each}
</div>
