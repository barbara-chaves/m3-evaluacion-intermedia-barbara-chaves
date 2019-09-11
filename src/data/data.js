
function getAndFormatData(){
  return fetch('./data.json')
      .then(response => response.json())
      .then(data => data.map(pokemon => {
        return {
          image: pokemon.url,
          name: pokemon.name,
          types: pokemon.types
        }
      }))
  
}

export { getAndFormatData }