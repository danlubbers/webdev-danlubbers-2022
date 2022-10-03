<script>
	import connect from '$lib/data/connect.json';

	const codewars = connect.find((connect) => connect.name === 'Codewars');
</script>

<div class="mb-6 w-full flex justify-center">
	<a href={codewars?.url} aria-label="codewars" target="_blank" rel="noopener noreferrer">
		<img width="400" src="https://www.codewars.com/users/danlubbers/badges/large" alt="" />
	</a>
</div>
