<script context="module">
	export const prerender = true;
</script>

<script>
	import { payload } from '../stores.js';
</script>

<section>
	<h1>Payload from Store</h1>
	<p>Date() as ISO from <code>`src/stores.js`</code>: {$payload}</p>
</section>

<style>
</style>
