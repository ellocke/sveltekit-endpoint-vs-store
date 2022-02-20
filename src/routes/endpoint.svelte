<script context="module">
	export const hydrate = false;
	export const prerender = false;
</script>

<script>
	export let payload; // from body.payload
	// $: status = payload ? true : false;
</script>

<svelte:head>
	<title>Endpoint</title>
</svelte:head>

<div class="content">
	<h1>Random Dad Joke from Endpoint</h1>
	<p>{payload.joke}</p>
</div>
<div>
	<p>
		API: <a href="https://icanhazdadjoke.com/api#fetch-a-random-dad-joke">icanhazdadjoke</a>
	</p>
</div>

<style>
</style>
