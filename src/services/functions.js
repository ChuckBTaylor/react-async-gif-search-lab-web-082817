export function fetchFromGiphy(query) {
  return (
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())
  )
}
