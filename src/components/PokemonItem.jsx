export const PokemonItem = ({url}) => {
  return (
   <ul>
    <li className="text-2xl font-bold dark:text-black">
    {url?.name} <img src={url?.image} alt={url?.name}/>
    </li>
   </ul>
    )
}
