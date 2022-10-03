<script>
	import Logo from '$lib/logos/Logo.svelte';
	import { page } from '$app/stores';

	const nav = [
		{ title: 'PROJECTS', path: '/projects' },
		{ title: 'EDUCATION', path: '/education' },
		{ title: 'TECHNOLOGY', path: '/technology' },
		{ title: 'CONNECT', path: '/connect' }
	];
</script>

<header
	class="relative w-full mb-12 md:px-8 px-8 pt-8 pr-2 flex flex-row md:justify-between md:items-end justify-center z-10"
>
	<a class="w-full max-w-md" href="/">
		<Logo width="2000" />
	</a>

	<nav class="md:flex hidden">
		<ul class="list-reset md:flex md:items-center ">
			{#each nav as { title, path }}
				<li class="md:ml-4">
					<a class:active={$page.url.pathname === path} href={path}>{title}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.active {
		color: #a52a25;
	}
</style>
