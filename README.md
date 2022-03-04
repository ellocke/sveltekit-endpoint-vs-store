# README

Demo: [https://sveltekit-endpoint-fetch.netlify.app/](https://sveltekit-endpoint-fetch.netlify.app/)

This is a minimal exploration of Svelte-Kit's newly added "shadow" [endpoint functionality](https://kit.svelte.dev/docs/routing#endpoints).

The endpoint is in `src/routes/endpoint.js`, the consuming route (page) is in `src/routes/endpoint.svelte`.

Since we're using [https://kit.svelte.dev/](https://kit.svelte.dev/) here, you might or might not be surprised that whatever is returned by the endpoint, can be prerendered and served "statically".

Compare `src/routes/endpoint.svelte` & `src/routes/endpoint-dyn.svelte` and the state of `const prerender = true|false`.

> However, `prerender = true` has no effect in local development!

For comparison, `src/routes/dynamic.svelte` is making an on-demand async fetch request to the same API.

`src/routes/index.svelte` returns a formatted DateTime string from the store (`src/stores.js`). The store imports a module which exports a utility function.

# Quickstart

- `git clone repo`
- `npm ci`
- `npm run dev`
