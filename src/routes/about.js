// docs: https://kit.svelte.dev/docs/routing#endpoints

export async function get() {

  const payload = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json'
    }
  }).then(res => res.json())

  // console.log(payload)

  // status, headers, body are conventions
  return {
    body: {
      payload
    }
  }
}
