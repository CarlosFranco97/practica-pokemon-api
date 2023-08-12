import { PokemonItem } from './PokemonItem'
import { TituloPokeApi } from './TituloPokeApi'
import {InputPokemon} from './InputPokemon'
import { useState } from 'react'
import { BotonEliminar } from './BotonEliminar'
export const AppSearchPokemon = () => {
  const tituloPokeApi = 'PokeApi'
  const [pokemonUrl, setPokemonUrl] = useState()
    const handleActionPokemon = (pokemonObject) => {
    setPokemonUrl(pokemonObject);
    }; 
    
    const handleDeletePokemon = () => {
    setPokemonUrl(null)
    };
  return (
    <>
    <div className='flex flex-col items-center w-full h-screen
    bg-[url("https://tierragamer.com/wp-content/uploads/2022/05/Pokedex-dePokemon.jpg")] bg-cover '>
      <TituloPokeApi titulo={tituloPokeApi}/>
      
      <InputPokemon onActionPokemon={handleActionPokemon}/>
     
      <div className='flex flex-col items-center bg-slate-200 rounded-xl h-1/5 w-1/5'>
        <PokemonItem url={pokemonUrl}/>
      </div>
      { (pokemonUrl) ?
        <BotonEliminar onDeletePokemon={handleDeletePokemon}/>
        :null 
      }
   </div>
    </>
    )
}

  