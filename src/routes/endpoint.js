// docs: https://kit.svelte.dev/docs/routing#endpoints

export async function get() {

  const joke = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    }).then(res => res.json())
    .then(data => data.joke)

  // status, headers, body are conventions
  return {
    body: {
      joke
    }
  }
}
