<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import technologies from '$lib/data/technology.json';

	const pageTitle = 'Dan Lubbers | Technology';
	const metadescription = 'Dan Lubbers is a Web Developer, Photographer, & Retoucher';
</script>

<SEO {pageTitle} {metadescription} />

<div
	class="w-full md:h-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-items-center md:overflow-x-hidden"
>
	{#each technologies as { name, logo }}
		<div class="my-6 flex flex-col justify-center items-center">
			<img width="50" src={`/logos/${logo}`} alt={name} />
			<p class="mt-4 text-center">{name}</p>
		</div>
	{/each}
</div>
