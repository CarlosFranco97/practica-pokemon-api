import { PokemonItem } from './PokemonItem'
import { TituloPokeApi } from './TituloPokeApi'
import {BotonEliminar} from './BotonEliminar'
import {InputPokemon} from './InputPokemon'
export const AppSearchPokemon = () => {
  const tituloPokeApi = 'PokeApi'
  const pokemonUrl = {
   id: 1,
   name: 'pikachu',
   image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  }
  return (
    <>
      <TituloPokeApi titulo={tituloPokeApi}/>
      <InputPokemon />
      <PokemonItem url={pokemonUrl}/>
      <BotonEliminar />
    </>
    )
}
