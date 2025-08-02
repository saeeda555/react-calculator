import React from 'react'
import { useState ,useEffect} from 'react'

import './App.css'
import Calculator from './calculator/calculator'

function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    
    useEffect(()=>{
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);
    return ()=> clearInterval(interval)
    },[])
  return (
    <>
     <div className='text-3xl font-bold p-1.5'>CALCULATOR</div>

     <div className='flex items-center justify-center'>
       <div className="text-left mb-12 p-4 bg-amber-300 rounded-3xl text-xl font-black h-14">{time}</div>
     </div>
      
      <div ><Calculator/></div>
      
      
     
    </>
  )
}

export default App
