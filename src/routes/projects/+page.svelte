<script lang="ts">
	// import SEO from '$lib/components/SEO.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import projects from '$lib/data/projects.json';

	// const pageTitle = 'Dan Lubbers | Projects Page';
	// const metadescription = 'Dan Lubbers is a Web Developer, Photographer, & Retoucher';
	// const siteLanguage = 'en';
</script>

<!-- <SEO {pageTitle} {metadescription} {siteLanguage} /> -->

<Carousel {projects} />
