<script>
	export let pageTitle;
	export let metadescription;
	export let siteLanguage;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width,initial-scale-1" />
	<meta name="description" content={metadescription} />
	<meta
		name="keywords"
		content="dan lubbers, web, web developer, web development, code, coding, software engineer, html, html5, css, css3, sass, scss, js, javascript, ts, typescript, react, gatsby, svelte, node, nodejs, louisville, ky, kentucky"
	/>
	<meta name="author" content="Dan Lubbers" />
	<meta name="canonical" href="https://webdev.danlubbers.com" />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta
		name="googlebot"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<html lang={siteLanguage} />
</svelte:head>
