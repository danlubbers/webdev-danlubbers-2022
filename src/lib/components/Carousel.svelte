<script lang="ts">
	import Icon from 'svelte-awesome';
	import chevronLeft from 'svelte-awesome/icons/chevronLeft';
	import chevronRight from 'svelte-awesome/icons/chevronRight';

	export let projects: any;

	const leftArrow = () => {
		projects = [projects[projects.length - 1], ...projects.slice(0, projects.length - 1)];
	};

	const rightArrow = () => {
		projects = [...projects.slice(1, projects.length), projects[0]];
	};

	const keyDown = (e: any) => {
		if (e.key === 'ArrowLeft') {
			projects = [projects[projects.length - 1], ...projects.slice(0, projects.length - 1)];
		}
		if (e.key === 'ArrowRight') {
			projects = [...projects.slice(1, projects.length), projects[0]];
		}
	};
</script>

<svelte:window on:keydown={keyDown} />

<div class="w-full relative flex flex-col md:overflow-x-hidden" id="carousel-container">
	<div class="flex flex-col md:flex-row flex-nowrap" id="carousel-projects">
		{#each projects as { client, position, tech, details, githubRepo, image, url }}
			<div class="first:mt-0 my-10 md:my-0 px-0 md:px-10 min-w-full flex flex-col text-left">
				<div class="flex flex-row items-end">
					<p class="text-xl">{client}: {position}</p>
				</div>
				<br />

				<h1 class="mb-2 md:mt-0 text-center">Tech:</h1>
				<p class="text-center">{tech}</p>
				<br />

				<h1 class="mb-2 md:mt-0 text-center">Details:</h1>
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
								rel="noreferrer"
								><img class="w-full md:w-2/3" src={`images/${image}`} alt={client} /></a
							>
						{:else}
							<img class="w-full md:w-1/2" src={`images/${image}`} alt={client} />
						{/if}
					</div>
				{/if}
			</div>
			<div class="last:hidden md:hidden border border-linkGrey" />
		{/each}
	</div>
	<button
		class="hidden md:block absolute top-1/4 left-0"
		on:click={leftArrow}
		aria-label="Left Arrow"><Icon data={chevronLeft} scale={1.5} /></button
	>
	<button
		class="hidden md:block absolute top-1/4 right-0"
		on:click={rightArrow}
		aria-label="Right Arrow"><Icon data={chevronRight} scale={1.5} /></button
	>
</div>
