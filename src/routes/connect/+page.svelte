<script lang="ts">
	// import SEO from '$lib/components/SEO.svelte';
	import socialMedia from '$lib/data/connect.json';
	import Icon from 'svelte-awesome';
	import githubSquare from 'svelte-awesome/icons/githubSquare';
	import linkedinSquare from 'svelte-awesome/icons/linkedinSquare';
	import twitter from 'svelte-awesome/icons/twitter';
	import instagram from 'svelte-awesome/icons/instagram';
	import camera from 'svelte-awesome/icons/camera';
	import cog from 'svelte-awesome/icons/cog';

	// const pageTitle = 'Dan Lubbers | Connect Page';
	// const metadescription = 'Dan Lubbers is a Web Developer, Photographer, & Retoucher';
	// const siteLanguage = 'en';

	const logoLoop = (logo: string | null) => {
		switch (logo) {
			case 'githubSquare':
				return githubSquare;
			case 'linkedinSquare':
				return linkedinSquare;
			case 'twitter':
				return twitter;
			case 'instagram':
				return instagram;
			case 'camera':
				return camera;
			default:
				return cog;
		}
	};
</script>

<!-- <SEO {pageTitle} {metadescription} {siteLanguage} /> -->

<div class="w-full mb-5 flex flex-col justify-start">
	<p class="md:pl-5 font-medium">
		Email:{` `}
		<a href="mailto:dan@danlubbers.com?subject=Mailed from Dan Lubbers Web Development site.com">
			dan@danlubbers.com
		</a>
	</p>
	<div class="w-full pt-4 md:px-10 flex justify-start">
		<ul>
			{#each socialMedia as { name, url, logo }}
				<li class="my-4 text-xl">
					<a class="flex flex-row" href={url} target="_blank" rel="noreferrer"
						><Icon data={logoLoop(logo)} scale={2} />
						<p class="ml-4">{name}</p></a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
