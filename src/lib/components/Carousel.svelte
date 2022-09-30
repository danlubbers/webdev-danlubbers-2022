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

<div class="w-full relative flex flex-col overflow-x-hidden" id="carousel-container">
	<div class="flex flex-row flex-nowrap" id="carousel-projects">
		{#each projects as { client, position, tech, details, githubRepo, image, url }}
			<div class="px-10 min-w-full flex flex-col text-left">
				<div class="flex flex-row items-end">
					<p class="text-xl">{client}: &ensp;</p>
					<p>{position}</p>
				</div>
				<br />

				<h1 class="text-center">Tech:</h1>
				<p class="text-center">{tech}</p>
				<br />

				<h1 class="text-center">Details:</h1>
				<p class="text-left">{details}</p>
				<br />

				{#if githubRepo}
					<a href={githubRepo}><h1>GITHUB REPO</h1></a>
				{/if}

				{#if image}
					<div class="w-full mt-10 flex justify-center">
						{#if url}
							<a
								href={`https://${url}`}
								class="flex justify-center"
								target="_blank"
								rel="noreferrer"><img class="w-1/2" src={image} alt={client} /></a
							>
						{:else}
							<img class="w-1/2" src={image} alt={client} />
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	</div>
	<button on:click={leftArrow}><div class="leftChevron" /></button>
	<button on:click={rightArrow}><div class="rightChevron" /></button>
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
