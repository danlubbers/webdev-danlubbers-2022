<script>
	import '../app.css';
	import Logo from '$lib/logos/Logo.svelte';
</script>

<header class="relative w-full h-24 px-8 pt-8 flex flex-row justify-between items-end z-10">
	<a href="/" class="w-full"><Logo width="3500" /></a>

	<nav class="md:flex hidden">
		<ul class="list-reset md:flex md:items-center ">
			<li class="md:ml-4"><a href="/projects">PROJECTS</a></li>
			<li class="md:ml-4"><a href="/education">EDUCATION</a></li>
			<li class="md:ml-4"><a href="/technology">TECHNOLOGY</a></li>
			<li class="md:ml-4"><a href="/connect">CONNECT</a></li>
		</ul>
	</nav>
</header>

<main class="my-8 mx-10 h-screen grid-rows-auto flex justify-center">
	<slot />
</main>

<footer class="w-full absolute bottom-0 left-0 flex justify-center ">
	<p class="mb-4 text-xs">
		ALL IMAGES COPYRIGHT ©
		<a href="http://www.danlubbers.com" target="_blank" rel="noreferrer"> DAN LUBBERS </a> | SITE
		BUILT BY
		<a href="http://www.danlubbers.com" target="_blank" rel="noreferrer"> DAN LUBBERS </a>
	</p>
</footer>
