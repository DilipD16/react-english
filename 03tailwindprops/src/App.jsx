import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name : 'Dilip',
    age :25,
    address:{
      city :'Banglore',
      state :'Karnataka',
      country :'India'
    }
  }
  let newArr =[1,2,3,4,5,6,7,8,9]

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3'>Vite with tailwind </h1>
     <Card username="dilip" myArr ={newArr} />
     <Card username="Manoj" post ="AR Executive"/>
     <Card />
    </>
  )
}

export default App
