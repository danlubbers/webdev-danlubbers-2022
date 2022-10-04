<script>
	import '../app.css';
	import SEO from '$lib/components/SEO.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const pageTitle = 'Dan Lubbers | Web Developer';
	const metadescription = 'Dan Lubbers is a Web Developer, Photographer, & Retoucher';
	const siteLanguage = 'en';
</script>

<SEO {pageTitle} {metadescription} {siteLanguage} />
<Header />

<main class="my-8 mx-10 h-screen grid-rows-auto flex justify-center">
	<slot />
</main>

<Footer />
