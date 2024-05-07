import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' h-screen w-full main text-white'>
      <nav className=' p-4 flex  text-black-300 justify-around'>
        <div className='font-thin text-3xl hover:text-yellow-500 cursor-pointer'>UZAIR <span 
        className=' border-none text-yellow-500 font-extrabold  hover:text-white '  >.</span></div>
        <ul className='list-none flex pt-2 justify-around gap-6 text-lg font-medium cursor-pointer 
        '>
          <li className='hover:border-b-2'>Home</li>
          <li  className='hover:border-b-2'>About</li>
          <li className='hover:border-b-2'>Services</li>
          <li className='hover:border-b-2'>My Skills</li>
          <li className='hover:border-b-2'>My Work</li>
          <li className='hover:border-b-2'>Contact Me https://www.pinterest.com/pin/744501382178029635/</li>
        </ul>
      </nav>
      </div>
    </>
  )
}

export default App
