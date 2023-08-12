import { PokemonItem } from './PokemonItem'
import { TituloPokeApi } from './TituloPokeApi'
import {BotonEliminar} from './BotonEliminar'
import {InputPokemon} from './InputPokemon'
import { useState } from 'react'
export const AppSearchPokemon = () => {
  const tituloPokeApi = 'PokeApi'
  const [pokemonUrl, setPokemonUrl] = useState([])
    const handleActionPokemon = (pokemonObject) => {
    setPokemonUrl(pokemonObject);
    }; 
    
    const handleDeletePokemon = () => {
    setPokemonUrl(null)
    };

  return (
    <>
      <TituloPokeApi titulo={tituloPokeApi}/>
      <InputPokemon onActionPokemon={handleActionPokemon}/>
    
      { (pokemonUrl) ?
        <PokemonItem url={pokemonUrl}/>
        : <em>Pokemon no encontrado</em>
      }
      { (pokemonUrl) ?
        <BotonEliminar  onDeletePokemon={handleDeletePokemon}/>
        :null
      }
    </>
    )
}

  