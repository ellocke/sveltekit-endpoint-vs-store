<script context="module">
	export const hydrate = true;
	export const prerender = true;
</script>

<script>
	export let payload; // from body.payload
	// $: status = payload ? true : false;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>Random Dad Joke from Endpoint</h1>
	<p>{payload.joke}</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
