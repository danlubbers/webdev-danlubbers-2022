<script>
	import Logo from '$lib/components/Logo.svelte';
	import { page } from '$app/stores';

	const nav = [
		{ title: 'PROJECTS', path: '/projects' },
		{ title: 'EDUCATION', path: '/education' },
		{ title: 'TECHNOLOGY', path: '/technology' },
		{ title: 'CONNECT', path: '/connect' }
	];

	let showMobileNav = false;
	const mobileNavHandler = () => (showMobileNav = !showMobileNav);
</script>

<header
	class="relative w-full flex flex-col items-center md:flex-row md:justify-between md:items-end justify-center z-10"
>
	<a
		class="w-full max-w-md px-8 pt-8 pr-2 pl-6"
		href="/"
		on:click={() => (showMobileNav = false)}
		alt="site logo"
	>
		<Logo width="2000" />
	</a>
	<nav class="mt-8 flex items-center justify-center md:hidden">
		<div class="h-10 grid place-items-center" on:click={mobileNavHandler}>
			<span />
			<span />
			<span />
		</div>
	</nav>
	{#if showMobileNav}
		<div class="w-screen h-screen absolute top-0 left-0 mt-40 bg-bgGrey">
			<ul class="flex flex-col items-center">
				{#each nav as { title, path }}
					<li class="my-2 text-2xl">
						<a
							class:active={$page.url.pathname === path}
							href={path}
							on:click={() => (showMobileNav = false)}>{title}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{:else}
		<nav class="md:flex hidden">
			<ul class="list-reset md:flex md:items-center ">
				{#each nav as { title, path }}
					<li class="md:ml-4">
						<a class:active={$page.url.pathname === path} href={path}>{title}</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>

<style>
	.active {
		color: #a52a25;
	}
	span {
		display: block;
		width: 3rem;
		height: 0.1rem;
		background: #969696;
		transition: all 0.2s ease-in-out;
	}
</style>
