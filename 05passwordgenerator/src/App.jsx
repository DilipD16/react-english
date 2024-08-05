import { useState ,useCallback, useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //useState
  const [length, setlength] = useState(8)
  const [numberAllowed,setnumberAllowed] =useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState('')

  //useCallback
  const generatePassword = useCallback(() => {
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyxz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i=1; i<length;i++){
      const char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  },[length,numberAllowed,charAllowed])

  //useEffect
  useEffect(() => {
      generatePassword()
  }, [length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = () =>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  //useref
  const passwordRef = useRef(null)

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
     <h1 className=' my-3 text-center text-white'>Password generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
      type='text'
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClipboard} 
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
     </div>
     <div className='flex text-sm gap-x-1'>
        <div className='flex items-center gap-x-1'>
          <input 
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer '
          onChange={(e) => setlength(e.target.value)} 
          name=""
          id=""
          />
          <label htmlFor='length'>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked ={numberAllowed}
          onChange={() => {
            setnumberAllowed((prev) => !prev )
          }}
          />
           <label htmlFor='number'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked ={charAllowed}
          onChange={() => {
            setcharAllowed((prev) => !prev )
          }}
          />
           <label htmlFor='charInput'>Character</label>
        </div>
     </div>
    </div>
  )
}

export default App
