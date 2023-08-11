export const PokemonItem = ({url}) => {
  return (
   <ul>
    <li>
    {url.name} <img src={url.image} alt={url.name}/>
    </li>
   </ul>
    )
}
