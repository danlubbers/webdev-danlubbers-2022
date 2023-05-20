<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Analytics from '$lib/components/Analytics.svelte';
</script>

<Analytics />
<Header />

<main class="m-6 h-screen grid-rows-auto flex justify-center">
	<slot />
</main>

<Footer />
