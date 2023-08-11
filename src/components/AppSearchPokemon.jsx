import { PokemonItem } from "./PokemonItem"
import { TituloPokeApi } from "./TituloPokeApi"

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
      <PokemonItem url={pokemonUrl}/>
    </>
    )
}
