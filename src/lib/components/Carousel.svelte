<script>
	export let projects;

	const leftArrow = () => {
		projects = [projects[projects.length - 1], ...projects.slice(0, projects.length - 1)];
	};
	const rightArrow = () => {
		projects = [...projects.slice(1, projects.length), projects[0]];
	};
</script>

<div class="w-full mt-20 relative flex flex-col overflow-x-hidden" id="carousel-container">
	<div class="flex flex-row flex-nowrap" id="carousel-projects">
		{#each projects as project}
			<div class="px-10 min-w-full flex flex-col text-left">
				<div class="flex flex-row items-end">
					<p class="text-xl">{project.client}: &ensp;</p>
					<p>{project.position}</p>
				</div>
				<br />

				<h1 class="text-center">Tech:</h1>
				<p class="text-center">{project.tech}</p>
				<br />

				<h1 class="text-center">Details:</h1>
				<p class="text-left">{project.details}</p>
				<br />

				{#if project['github-repo']}
					<a href={project['github-repo']}><h1>GITHUB REPO</h1></a>
				{/if}

				{#if project.image}
					<div class="w-full mt-10 flex justify-center">
						<img class="w-1/2" src={project.image} />
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
