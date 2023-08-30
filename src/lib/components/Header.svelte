<script>
	import Logo from '$lib/components/Logo.svelte';
	import { page } from '$app/stores';

	const nav = [
		{ title: 'PROJECTS', path: '/projects' },
		{ title: 'EDUCATION', path: '/education' },
		{ title: 'TECHNOLOGY', path: '/technology' },
		{ title: 'CONNECT', path: '/connect' }
	];

	let activeHamburger = false;
	let showMobileNav = false;

	const mobileNavHandler = () => {
		showMobileNav = !showMobileNav;
		activeHamburger = !activeHamburger;
	};

	const resetDefaults = () => {
		showMobileNav = false;
		activeHamburger = false;
	};
</script>

<header
	class="relative w-full flex flex-col items-center md:flex-row md:justify-between md:items-end justify-center z-10"
>
	<a
		class="w-full max-w-md px-8 pt-8 pr-2 pl-6"
		href="/"
		on:click={resetDefaults}
		aria-label="Click to go to home screen"
	>
		<Logo width="2000" />
	</a>
	<nav class="mt-8 flex items-center justify-center md:hidden">
		<div
			class="h-10 grid place-items-center"
			on:keypress={mobileNavHandler}
			on:click={mobileNavHandler}
			role="button"
			tabindex="0"
		>
			<span class:active={activeHamburger} />
			<span class:active={activeHamburger} />
			<span class:active={activeHamburger} />
		</div>
	</nav>
	{#if showMobileNav}
		<div class="w-screen h-screen absolute top-0 left-0 mt-40 bg-bgGrey">
			<ul class="flex flex-col items-center">
				{#each nav as { title, path }}
					<li class="my-2 text-2xl">
						<a class:active={$page.url.pathname === path} href={path} on:click={resetDefaults}
							>{title}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{:else}
		<nav class="md:flex hidden">
			<ul class="list-reset md:flex md:items-center pr-6">
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
		color: #fb3831;
	}
	span {
		display: block;
		width: 3rem;
		height: 0.1rem;
		background: #969696;
		transition: all 0.2s ease-in-out;
	}

	.active:nth-child(1) {
		width: 3rem;
		transform-origin: center center;
		transform: rotate(-45deg) translate(-0.3rem, 0.9rem);
	}
	.active:nth-child(2) {
		opacity: 0;
		transform: translate(1rem);
	}
	.active:nth-child(3) {
		width: 3rem;
		transform-origin: center center;
		transform: rotate(45deg) translate(-0.2rem, -0.9rem);
	}
</style>
