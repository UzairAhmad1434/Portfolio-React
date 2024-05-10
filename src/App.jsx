import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='overflow-none'>
      <div className=' h-screen w-full main text-white'>
        <nav className=' p-4 flex  text-black-300 justify-around'>
          <div className='font-thin text-3xl hover:text-yellow-500 cursor-pointer'>UZAIR <span
            className=' border-none text-yellow-500 font-extrabold  hover:text-white '  >.</span></div>
          <ul className='list-none flex pt-2 justify-around gap-6 text-lg font-medium cursor-pointer 
        '>
            <li className='hover:border-b-2 border-yellow-500 '>Home</li>
            <li className='hover:border-b-2 border-yellow-500'>About</li>
            <li className='hover:border-b-2 border-yellow-500'>Services</li>
            <li className='hover:border-b-2 border-yellow-500'>My Skills</li>
            <li className='hover:border-b-2 border-yellow-500'>My Work</li>
            <li className='hover:border-b-2 border-yellow-500'>Contact Me</li>
          </ul>
        </nav>
        <div className="flex w-full h-5/6 items-center justify-around gap-4 max-md:flex-col ">
          <div className=" left w-3/5 flex  flex-col justify-center  ">
            <h2 className='leading-normal ml-12 text-3xl  text-start '>Aoa, My name is </h2>
            <h1 className='ml-12 text-5xl text-yellow-500'>Uzair Ahmad Khan</h1>
            <p className='leading-normal ml-12 text-4xl'>I'm a Web Designer <span className='text-yellow-500'>&</span> Frontend<br /> Developer</p>
            <div className='w-auto p-4'>
              <button className='px-4 py-2 ml-6 m-2 rounded-3xl text-xl w-64  bg-yellow-500 text-white hover:bg-transparent hover: border-yellow-500 hover: text-yellow-500'>Download CV</button>
              <button className='px-4 py-2 m-2 rounded-3xl text-xl w-64 border-2 border-yellow-500 text-yellow-500'>Let's Talk</button>
            </div>
          </div>
          <div className="right flex items-center justify-center w-2/5">
            <img className='w-96 ' src="./image/1.jpg" alt="imggg" />
          </div>
        </div>
      </div>

      <div className="About_me flex  flex-row-reverse justify-around  gap-4 max-md:flex-col items-center  text-white w-full  h-screen ">
        <div className="left w-3/5 flex  flex-col  ">
          <h1 className='leading-normal ml-12 text-4xl  text-start'>About <span className='text-yellow-500'>Me</span></h1>
          <p className='leading-normal ml-12 text-xl w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt sapiente a enim aspernatur voluptatibus harum? Odit corporis quam dolorem repellat ab ducimus reiciendis molestiae non eum, dolor error quisquam quis consequatur reprehenderit quidem nobis distinctio velit fugit id iure. Repudiandae, praesentium sed eligendi consectetur hic quia animi ullam alias. Inventore odio aspernatur tempore praesentium nisi, voluptatum nobis consectetur? Quia.</p>
        </div>
        <div className="right flex items-center justify-center w-2/5 ">
            <img className='w-96' src="./image/1.jpg" alt="imggg" />
          </div>
      </div>
      </div>
    </>
  )
}

export default App
