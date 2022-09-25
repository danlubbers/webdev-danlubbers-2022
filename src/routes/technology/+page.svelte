<script>
	import technologies from '$lib/data/technology.json';
</script>

<div class="mt-10 w-full h-1/2 grid grid-cols-5 justify-items-center">
	{#each technologies as { name, logo }}
		<p class="text-center">{name}</p>
	{/each}
</div>
