export const query = (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name || "bulbasaur"}`)
    .then(response => response.json())
    .then((response) => {
      if (response == null) {
        console.log('retrieving data');
      } else {
        console.log('success');
        return response;
      }
    })
}

