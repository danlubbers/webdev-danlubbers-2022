<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import projects from '$lib/data/projects.json';

	const pageTitle = 'Dan Lubbers | Projects';
	const metadescription = 'Dan Lubbers is a Web Developer, Photographer, & Retoucher';
</script>

<SEO {pageTitle} {metadescription} />

<Carousel {projects} />
