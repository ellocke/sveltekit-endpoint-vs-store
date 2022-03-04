<script context="module">
	export const hydrate = true; // no effect in dev
	export const prerender = false; // no effect in dev
</script>

<script>
	export let joke; // from body.joke
	// $: status = joke ? true : false;
</script>

<svelte:head>
	<title>Endpoint</title>
</svelte:head>

<div class="content">
	<h1>Random Joke from Endpoint</h1>
	<blockquote>with <code>prerender = false;</code></blockquote>
	<p><code>Response: </code>{joke}</p>
</div>
<div>
	<p>
		<code>API: </code><a href="https://icanhazdadjoke.com/api#fetch-a-random-dad-joke"
			>icanhazdadjoke</a
		>
	</p>
</div>

<style>
</style>
