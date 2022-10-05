<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Analytics from '$lib/components/Analytics.svelte';
</script>

<Analytics />
<Header />

<main class="my-8 mx-10 h-screen grid-rows-auto flex justify-center">
	<slot />
</main>

<Footer />
