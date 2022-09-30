<script>
	import education from '$lib/data/education.json';
</script>

<ul class="w-full">
	{#each education as { name, url, description, location, date }}
		<li class="w-full mb-5 flex flex-row">
			<p>{date}&ensp;-&ensp;</p>
			<p><a href={url} target="_blank" rel="noreferrer">{name},&ensp;</a></p>
			<p>{location}&ensp; | &ensp;</p>
			<p>{description}</p>
		</li>
	{/each}
</ul>
