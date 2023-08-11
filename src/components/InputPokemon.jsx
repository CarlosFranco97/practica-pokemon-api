import { useReducer } from "react"
import { BotonBuscar } from "./BotonBuscar"
export const InputPokemon = () => {
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

    const handleInputChnage = ({target}) => {
        dispatch({
            type: 'Change_Input',
            payload: target.value
        })
    }
  
    const handleSubmit = (event) => {
        event.preventDefault()
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
