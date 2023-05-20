<script>
	import SEO from '$lib/components/SEO.svelte';
	import recommendations from '$lib/data/recommendations.json';
	import Icon from 'svelte-awesome';
	import chevronLeft from 'svelte-awesome/icons/chevronLeft';
	import chevronRight from 'svelte-awesome/icons/chevronRight';

	const pageTitle = 'Dan Lubbers | Recommendations Page';
	const metadescription = 'Dan Lubbers is a Web Developer, Photographer, & Retoucher';
	const siteLanguage = 'en';

	let recommendationList = recommendations;
	console.log('recommendationList', recommendationList);

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

	const keyDown = (e) => {
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

<svelte:window on:keydown|preventDefault={keyDown} />

<SEO {pageTitle} {metadescription} {siteLanguage} />

<div class="w-full relative flex flex-col md:overflow-x-hidden " id="carousel-container">
	<div class="md:hidden flex flex-col md:flex-row flex-nowrap" id="carousel-projects">
		{#each recommendationList as { name, title, linkedInURL, recommendationText }}
			<div class="first:mt-0 my-10 md:my-0 px-0 md:px-10 min-w-full flex flex-col justify-end">
				<div class="w-full mt-10">
					<a href={linkedInURL} class="flex flex-col items-center" target="_blank" rel="noreferrer">
						<h1 class="text-xl font-bold">{name}:</h1>
						<h3 class="my-2">Title: {title}</h3>
					</a>
					<p>"{recommendationText}"</p>
				</div>
			</div>
			<div class="last:hidden md:hidden border border-linkGrey" />
		{/each}
	</div>
	<div class="hidden md:flex flex-col md:flex-row flex-nowrap" id="carousel-projects">
		{#each recommendationList as { name, image, linkedInURL }}
			<div class="first:mt-0 my-10 md:my-0 px-0 md:px-10 min-w-full flex flex-col justify-end">
				<div class="w-full mt-10 flex justify-center">
					<a href={linkedInURL} class="flex justify-center" target="_blank" rel="noreferrer">
						<img class="p-10" src={`images/recommendations/${image}`} alt={name} />
					</a>
				</div>
			</div>
			<div class="last:hidden md:hidden border border-linkGrey" />
		{/each}
	</div>
	<button
		class="hidden md:block absolute top-1/4 left-2"
		on:click={leftArrow}
		aria-label="Left Arrow"><Icon data={chevronLeft} scale={1.5} /></button
	>
	<button
		class="hidden md:block absolute top-1/4 right-2"
		on:click={rightArrow}
		aria-label="Right Arrow"><Icon data={chevronRight} scale={1.5} /></button
	>
</div>
