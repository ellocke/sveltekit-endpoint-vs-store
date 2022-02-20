<script context="module">
	export const hydrate = true; // no effect in dev
	export const prerender = true; // no effect in dev
</script>

<script>
	export let joke; // from body.joke
	// $: status = joke ? true : false;
</script>

<svelte:head>
	<title>Endpoint</title>
</svelte:head>

<div class="content">
	<h1>Random Dad Joke from Endpoint</h1>
	<p>{joke}</p>
</div>
<div>
	<p>
		API: <a href="https://icanhazdadjoke.com/api#fetch-a-random-dad-joke">icanhazdadjoke</a>
	</p>
</div>

<style>
</style>
