<script>
	import Logo from '$lib/logos/Logo.svelte';
</script>

<header class="relative w-full h-18 mb-12 px-8 pt-8 flex flex-row justify-between items-end z-10">
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
