import { useEffect, useState } from "react"

export const useFetch = (url) => {
 const[state, setState] = useState({  
    data: null
  }); 

  const getFetchApi = async() => {
   const response = await fetch(url)
   const data = await response.json()
   setState({
    data
   })
  };

  useEffect(() => {
   getFetchApi()
  }, [url])
    
  return {
   data: state.data
  }
}
