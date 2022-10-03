<script>
	export let projects;

	const leftArrow = () => {
		projects = [projects[projects.length - 1], ...projects.slice(0, projects.length - 1)];
	};

	const rightArrow = () => {
		projects = [...projects.slice(1, projects.length), projects[0]];
	};

	const keyDown = (e) => {
		if (e.key === 'ArrowLeft') {
			projects = [projects[projects.length - 1], ...projects.slice(0, projects.length - 1)];
		}
		if (e.key === 'ArrowRight') {
			projects = [...projects.slice(1, projects.length), projects[0]];
		}
	};
</script>

<svelte:window on:keydown|preventDefault={keyDown} />

<div class="w-full relative flex flex-col md:overflow-x-hidden " id="carousel-container">
	<div class="flex flex-col md:flex-row flex-nowrap" id="carousel-projects">
		{#each projects as { client, position, tech, details, githubRepo, image, url }}
			<div class="first:mt-0 my-10 md:my-0 px-0 md:px-10 min-w-full flex flex-col text-left">
				<div class="flex flex-row items-end">
					<p class="text-xl">{client}: {position}</p>
				</div>
				<br />

				<h1 class="mt-6 md:mt-0 text-center">Tech:</h1>
				<p class="text-center">{tech}</p>
				<br />

				<h1 class="mt-6 md:mt-0 text-center">Details:</h1>
				<p class="text-left">{details}</p>
				<br />

				{#if githubRepo}
					<div class="w-1/6">
						<a href={githubRepo}><h1>GITHUB REPO</h1></a>
					</div>
				{/if}

				{#if image}
					<div class="w-full mt-10 flex justify-center">
						{#if url}
							<a
								href={`https://${url}`}
								class="flex justify-center"
								target="_blank"
								rel="noreferrer"><img class="w-full md:w-2/3" src={image} alt={client} /></a
							>
						{:else}
							<img class="w-full md:w-1/2" src={image} alt={client} />
						{/if}
					</div>
				{/if}
			</div>
			<div class="last:hidden md:hidden border border-linkGrey" />
		{/each}
	</div>
	<button on:click={leftArrow}><div class="leftChevron hidden md:block" /></button>
	<button on:click={rightArrow}><div class="rightChevron hidden md:block" /></button>
</div>

<style>
	.leftChevron {
		position: absolute;
		top: 25%;
		left: 8px;
		border-right: 2px solid #969696;
		border-bottom: 2px solid #969696;
		width: 16px;
		height: 16px;
		transform: rotate(-225deg);
	}

	.rightChevron {
		position: absolute;
		top: 25%;
		right: 8px;
		border-right: 2px solid #969696;
		border-bottom: 2px solid #969696;
		width: 16px;
		height: 16px;
		transform: rotate(-45deg);
	}
</style>
