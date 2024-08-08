import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
  const [data,setData] =useState({})
  useEffect(() =>{
    fetch(`https://gist.github.com/ksafranski/2973986.js`)

  },[currency])
}



export default useCurrencyInfo