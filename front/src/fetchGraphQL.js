async function fetchGraphQL(text, variables) {
  console.log(text)
  const response = await fetch('http://localhost:3030/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables
    })
  })

  return await response.json()
}

export default fetchGraphQL