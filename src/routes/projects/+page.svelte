<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import projects from '$lib/data/projects.json';

	const pageTitle = 'Dan Lubbers | Projects';
	const metadescription = 'Dan Lubbers is a Web Developer, Photographer, & Retoucher';
</script>

<SEO {pageTitle} {metadescription} />

<div class="w-full md:h-3/4 relative flex flex-col md:overflow-x-hidden">
	<Carousel {projects} />
</div>
