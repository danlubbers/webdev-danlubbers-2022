<script>
	import socialMedia from '$lib/data/connect.json';
</script>

<div class="w-full flex flex-col justify-start">
	<p class="pl-5">
		Email:{` `}
		<a href="mailto:lubbers.dan@gmail.com?subject=Mailed from danlubbersphotographs.com">
			lubbers.dan@gmail.com
		</a>
	</p>
	<div class="w-full pt-4 px-10 flex justify-start">
		<ul>
			{#each socialMedia as { name, url }}
				<li class="my-1"><a href={url} target="_blank" rel="noreferrer">{name}</a></li>
			{/each}
		</ul>
	</div>
</div>
