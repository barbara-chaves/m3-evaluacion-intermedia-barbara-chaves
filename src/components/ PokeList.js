import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/poke-list.css'

const PokeList = (props) => {
  return(
    <ul className='poke-list'>
      {props.pokemonList.map((pokemon, index) => {
        return (
          <Pokemon
            key={index}
            image={pokemon.image}
            name={pokemon.name}
            types={pokemon.types}
          />
        )
      })}
    </ul>
  )
}

export default PokeList