<script lang="ts">
	import recommendations from '$lib/data/recommendations.json';
	import Icon from 'svelte-awesome';
	import chevronLeft from 'svelte-awesome/icons/chevronLeft';
	import chevronRight from 'svelte-awesome/icons/chevronRight';

	let recommendationList = recommendations;

	const leftArrow = () => {
		recommendationList = [
			recommendationList[recommendationList.length - 1],
			...recommendationList.slice(0, recommendationList.length - 1)
		];
	};

	const rightArrow = () => {
		recommendationList = [
			...recommendationList.slice(1, recommendationList.length),
			recommendationList[0]
		];
	};

	const keyDown = (e: any) => {
		if (e.key === 'ArrowLeft') {
			recommendationList = [
				recommendationList[recommendationList.length - 1],
				...recommendationList.slice(0, recommendationList.length - 1)
			];
		}
		if (e.key === 'ArrowRight') {
			recommendationList = [
				...recommendationList.slice(1, recommendationList.length),
				recommendationList[0]
			];
		}
	};
</script>

<svelte:window on:keydown={keyDown} />

<div class="mt-10 w-full relative flex flex-col md:overflow-x-hidden" id="carousel-container">
	<div class=" border border-linkGrey" />
	<h1 class="text-xl mt-10 text-center">Recommendations:</h1>
	<div class="md:hidden flex flex-col md:flex-row flex-nowrap" id="carousel-projects">
		{#each recommendationList as { name, title, linkedInURL, recommendationText }}
			<div class="first:mt-0 mb-10 min-w-full flex flex-col justify-end">
				<div class="w-full mt-10">
					<a href={linkedInURL} class="flex flex-col items-center" target="_blank" rel="noreferrer">
						<h1 class="text-xl font-bold">{name}</h1>
						<h2 class="my-2">Title: {title}</h2>
					</a>
					<p>"{recommendationText}"</p>
				</div>
			</div>
			<div class="last:hidden md:hidden border border-linkGrey" />
		{/each}
	</div>
	<div class="hidden md:flex flex-col md:flex-row flex-nowrap" id="carousel-projects">
		{#each recommendationList as { name, image, linkedInURL }}
			<div class="min-w-full flex flex-col justify-end">
				<div class="w-full flex justify-center">
					<a href={linkedInURL} class="flex justify-center" target="_blank" rel="noreferrer">
						<img class="px-10 pt-2" src={`images/recommendations/${image}`} alt={name} />
					</a>
				</div>
			</div>
			<div class="last:hidden md:hidden border border-linkGrey" />
		{/each}
	</div>
	<button
		class="hidden md:block absolute top-2/3 left-0"
		on:click={leftArrow}
		aria-label="Left Arrow"><Icon data={chevronLeft} scale={1.5} /></button
	>
	<button
		class="hidden md:block absolute top-2/3 right-0"
		on:click={rightArrow}
		aria-label="Right Arrow"><Icon data={chevronRight} scale={1.5} /></button
	>
</div>
