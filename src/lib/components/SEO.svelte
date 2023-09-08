<script lang="ts">
	export let pageTitle: string;
	export let metadescription: string;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="keywords"
		content="dan lubbers, web, web developer, web development, code, coding, 
		software engineer, html, html5, css, css3, sass, scss, js, javascript, ts, 
		typescript, react, gatsby, svelte, node, nodejs, louisville, ky, kentucky"
	/>
	<meta name="author" content="Dan Lubbers" />
</svelte:head>
