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
          <li className='hover:border-b-2'>Contact Me</li>
        </ul>
      </nav>
      <div className=" left w-full h-5/6 flex  flex-col justify-center p-4 ">
        <h2 className='leading-normal ml-12 text-2xl  text-start '>Aoa, My name is </h2>
        <h1 className='ml-12 text-4xl text-yellow-500'>Uzair Ahmad Khan</h1>
        <p className='leading-normal ml-12 text-3xl'>I'm a Web Designer <span className='text-yellow-500'>&</span> Frontend<br /> Developer</p>
      </div>
      <div className="right">
        
      </div>
      </div>
    </>
  )
}

export default App
