import React, { useEffect, useState } from 'react'
import { query } from '../../Tools/query'
import SearchBar from "../../Components/SearchBar"
import PokemonImage from "../PokemonImage/PokemonImage"

export default function Landing() {
  const [pokemon, setPokemon] = useState()
  const [pokemonName, setPokemonName] = useState()
  useEffect(() => {
    query(pokemonName).then(
      response => setPokemon(response))
  }, [pokemonName])

  console.log(pokemon)
  const handleChange = (event) => {
    setPokemonName(event.target.value)
  }
  let image = []

  if (pokemon !== undefined && pokemon !== " ") {
    image.push(pokemon.sprites.front_default)
    image.push(pokemon.sprites.back_default)
  }
  return (
    <div>
      <SearchBar handleChange={handleChange} name={pokemonName} />
      <PokemonImage image={image} />
    </div>
  )
}
