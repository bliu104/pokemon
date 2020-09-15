import React from 'react'
import "./PokemonImage.css"
export default function PokemonImage({ image }) {
  return (
    <div className="image">
      <img src={image[0]} width={250} />
      <img src={image[1]} width={250} />
    </div >
  )
}
