<script>
	import SEO from '$lib/components/SEO.svelte';
	import education from '$lib/data/education.json';

	const pageTitle = 'Dan Lubbers | Education';
	const metadescription = 'Dan Lubbers is a Web Developer, Photographer, & Retoucher';
	const siteLanguage = 'en';
</script>

<SEO {pageTitle} {metadescription} {siteLanguage} />

<ul class="w-full">
	{#each education as { name, url, description, location, date }}
		<li class="w-full mb-5 flex flex-row">
			<p>
				{date} -
				<a href={url} target="_blank" rel="noreferrer"
					>{name},
					{location} |
					{description}
				</a>
			</p>
		</li>
	{/each}
</ul>
