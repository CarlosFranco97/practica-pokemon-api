import { useReducer } from "react"
import { BotonBuscar } from "./BotonBuscar"
import { useFetch } from "../hook/useFetch";
export const InputPokemon = ({onActionPokemon}) => {
  //Para controlar el valor del input: 
    const [inputValue, dispatch] = useReducer((state = [], action) => {
    switch(action.type) {
        case 'Change_Input': 
        { const newValueInput = action.payload
        return newValueInput
        }
    default: 
    return state
    }
    });

    // const  apiPokemonDumy = () => {
    //     return {
    //         id: 1, 
    //         name: inputValue,
    //         image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    //     }
    // } 
    
    const handleInputChnage = ({target}) => {
        dispatch({
            type: 'Change_Input',
            payload: target.value
        })
    };

    const {data} = useFetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
  
    const getPokemonApi = () => {
        if (!data) return;
        const pokemon = {
            id: data.id, 
            name: data.name, 
            image:data.sprites.front_default
        };
        return pokemon
    }
     
    const handleSubmit = (event) => {
        event.preventDefault()
        onActionPokemon(getPokemonApi())
    }  
   
   
    return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Buscar Pokemon"
        value={inputValue}
        onChange={handleInputChnage}
        /> 
        <BotonBuscar />
    </form>  
    )
}
