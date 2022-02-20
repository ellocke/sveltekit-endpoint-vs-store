export async function get() {
  // message property name seems to be a convention
  let response = {
    body: {
      message: null
    }
  }

  await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      response.body.message = data
    })
  // console.dir(response)
  return response
}
