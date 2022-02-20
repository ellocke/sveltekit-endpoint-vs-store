<script>
	let fetchRequest;
	const fetchJoke = async function () {
		await fetch('https://icanhazdadjoke.com/', {
			headers: {
				Accept: 'application/json'
			}
		})
			.then((response) => response.json())
			.then((data) => (fetchRequest = data.joke));
	};

	function getNewJoke() {
		fetchRequest = fetchJoke();
	}

	getNewJoke(); // initial fetch
</script>

<h1>Dynamic Fetch of Random Dad Joke</h1>
<div>
	{#await fetchRequest}
		<p>Loading...</p>
	{:then joke}
		<p>{joke}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}

	<button on:click={getNewJoke}>fetch new</button>
</div>
<div>
	<p>
		API: <a href="https://icanhazdadjoke.com/api#fetch-a-random-dad-joke">icanhazdadjoke</a>
	</p>
</div>

<style>
	div {
		text-align: center;
	}
</style>
