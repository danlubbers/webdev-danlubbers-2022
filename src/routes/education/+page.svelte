<script>
	import education from '$lib/data/education.json';
</script>

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
