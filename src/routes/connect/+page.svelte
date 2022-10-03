<script>
	import socialMedia from '$lib/data/connect.json';
</script>

<div class="w-full mb-5 flex flex-col justify-start">
	<p class="md:pl-5 font-medium">
		Email:{` `}
		<a href="mailto:lubbers.dan@gmail.com?subject=Mailed from danlubbersphotographs.com">
			lubbers.dan@gmail.com
		</a>
	</p>
	<div class="w-full pt-4 md:px-10 flex justify-start">
		<ul>
			{#each socialMedia as { name, url }}
				<li class="my-2 text-xl"><a href={url} target="_blank" rel="noreferrer">{name}</a></li>
			{/each}
		</ul>
	</div>
</div>
