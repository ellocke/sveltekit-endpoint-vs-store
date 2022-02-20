<script context="module">
	export const prerender = true;
</script>

<script>
	export let message;
	// console.log(typeof message);
	console.dir(message);
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<p>{message.joke}</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
