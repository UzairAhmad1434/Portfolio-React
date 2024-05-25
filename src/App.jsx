import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='text-white overflow-none'>
      <div className=' h-screen w-full main text-white'>
        <nav className=' p-4 flex  text-black-300 justify-around'>
          <div className=' text-4xl hover:text-yellow-500 cursor-pointer transition-all duration-500 ease-in-out font-medium'>UZAIR <span
            className=' border-none text-yellow-500 font-extrabold  hover:text-white '  >.</span></div>
          <ul className='list-none flex pt-2 justify-around gap-6 text-xl font-light cursor-pointer 
        '>
            <li className='hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out'>Home</li>
            <li className='hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out'>About</li>
            <li className='hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out'>Services</li>
            <li className='hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out'>My Skills</li>
            <li className='hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out'>My Work</li>
            <li className='hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out'>Contact Me</li>
          </ul>
        </nav>
        <div className="flex w-full h-5/6 items-center pl-8 justify-around  max-md:flex-col ">
          <div className=" left w-3/5 flex  flex-col justify-center  ">
            <h2 className='leading-normal ml-12 text-3xl font-light text-start '>Aoa, My name is </h2>
            <h1 className='ml-12 text-5xl text-yellow-500'>Uzair Ahmad Khan</h1>
            <p className='leading-normal font-light ml-12 text-4xl'>I'm a Web Designer <span className='text-yellow-500'>&</span> Frontend<br /> Developer</p>
            <div className='w-auto p-4'>
              <button className='px-4 py-4 ml-6 m-2  text-2xl w-64  bg-yellow-500 text-white hover:bg-transparent border-2 border-yellow-500 transition-all duration-300 ease-in-out hover:text-yellow-500'>Download CV</button>
              <button className='px-4 py-4 m-2  text-2xl w-64 border-2 border-yellow-500  text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all duration-300 ease-in-out'>Let's Talk</button>
            </div>
          </div>
          <div className="right flex items-center justify-center w-2/5">
            <img className='w-96 ' src="./image/1.jpg" alt="imggg" />
          </div>
        </div>
      </div>

      <div className="About_me flex  flex-row-reverse justify-around  gap-4 max-md:flex-col items-center  text-white w-full  h-screen ">
        <div className="left w-3/5 flex  flex-col items-start ">
          <h1 className='leading-normal ml-12 text-4xl  text-start'>About <span className='text-yellow-500'>Me</span></h1>
          <p className='leading-normal ml-12 text-lg font-light w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aut accusantium nobis quam, possimus consequatur quae, quaerat perferendis eum voluptate dolores iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt sapiente a enim aspernatur voluptatibus harum? Odit corporis quam dolorem repellat ab ducimus reiciendis molestiae non eum, dolor error quisquam quis consequatur reprehenderit quidem nobis distinctio velit fugit id iure. Repudiandae, praesentium sed eligendi consectetur hic quia animi ullam alias. Inventore odio aspernatur tempore praesentium nisi, voluptatum nobis consectetur? Quia.</p>
          <button className='px-4 py-2 m-4 ml-12  text-xl w-64 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all transition-300 ease-in-out'>Let's Talk</button>
        </div>
        <div className="right flex items-center justify-center w-2/5 ">
            <img className='w-96' src="./image/aboutimg.jpg" alt="imggg" />
          </div>
      </div>

      <div className="main services w-full h-screen flex flex-col  justify-center p-8">
        <h1 className='text-4xl p-4 ml-24 text-start'>My <span className='text-yellow-500'>Services</span></h1>
        <div className="cards flex flex-wrap gap-4 p-8 justify-center">
          <div className='w-60 card p-2 '>
            <h1 className='text-yellow-400 text-center text-2xl' >HTML / CSS</h1>
            <p className='text-md text-center font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id possimus corrupti, aliquid laudantium iste explicabo molestiae odio eius, praesentium ipsum. Repellendus mollitia magni enim. Maxime incidunt optio non aliquam accusamus, vel iste.</p>
          </div>
          <div className='w-60 card p-2'>
            <h1 className='text-yellow-400 text-center text-2xl' >Javascript</h1>
            <p className='text-md text-center font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id possimus corrupti, aliquid laudantium iste explicabo molestiae odio eius, praesentium ipsum. Repellendus mollitia magni enim. Maxime incidunt optio non aliquam accusamus, vel iste.</p>
          </div>
          <div className='w-60 card p-2'>
            <h1 className='text-yellow-400 text-center text-2xl' >React</h1>
            <p className='text-md font-light text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id possimus corrupti, aliquid laudantium iste explicabo molestiae odio eius, praesentium ipsum. Repellendus mollitia magni enim. Maxime incidunt optio non aliquam accusamus, vel iste.</p>
          </div>
          <div className='w-60 card p-2'>
            <h1 className='text-yellow-400 text-center text-2xl' >Webflow</h1>
            <p className='text-md font-light text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id possimus corrupti, aliquid laudantium iste explicabo molestiae odio eius, praesentium ipsum. Repellendus mollitia magni enim. Maxime incidunt optio non aliquam accusamus, vel iste.</p>
          </div>
        </div>       
        </div>
        <div className="About_me contact w-full p-8 flex flex-col justify-center items-center">
          <h1 className="text-4xl">Contact <span className="text-yellow-500">Me</span></h1>
          <div className='flex justify-around p-4 font-lighty flex-wrap max-[820px]:flex-col items-center'>
            <div className='flex flex-col justify-center items-center p-4 px-8 w-1/3'>
              <img className="w-12 m-4 invert-[1]" src="./Image/email_561127.png" alt="" />
             <h1 className='text-lg'> uzairahmadkhanmalik@gmail.com</h1>
            </div>
            <div className='flex flex-col justify-center items-center p-4 px-8 w-1/3'>
            <img className="w-12 m-4 invert-[1]" src="./Image/call_3178167.png" alt="" />
             <h1 className='text-lg'> +923135167976</h1>
            </div>
            <div className='flex flex-col justify-center items-center p-4 px-8 w-1/3'>
            <img className="w-12 m-4 invert-[1]" src="./Image/location_535239.png" alt="" />
             <h1 className='text-lg'> Kamra,Pakistan</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
