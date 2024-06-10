
import './App.css'
import PropTypes from 'prop-types';


function App() {

  function OpenSideBar() {

  }

  return (
    <>
      <div className='text-white overflow-none'>

        <NAV />
        <Home />
        <AboutMe />
        <CardPage />
        <ContactMe />
        <Footer />

      </div>
    </>
  )
}

function CardPage() {
  return (
    <div className="main services w-full  flex flex-col  justify-center p-4 py-12">
      <h1 className='text-4xl p-4 ml-24 text-center'>My <span className='text-yellow-500'>Services</span></h1>
      <div className="cards flex flex-wrap gap-2 justify-center">
        <Card card='Database' />
        <Card card='HTML / CSS' />
        <Card card='Javascript' />
        <Card card='React' />
        <Card card='Webflow' />
      </div>
    </div>
  )

}
function Card(props) {
  return (
    <div className='sm:w-80 w-64 card p-8 m-2'>
      <h1 className='text-yellow-400 text-center text-2xl' >{props.card}</h1>
      <p className='text-md text-center font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id possimus corrupti, aliquid laudantium iste explicabo molestiae odio eius, praesentium ipsum. Repellendus mollitia magni enim. Maxime incidunt optio non aliquam accusamus, vel iste.</p>
    </div>
  )
}
function NAV() {
  return (
    <nav className=' p-4 flex  main text-black-300 justify-around text-white'>
      <div className=' text-4xl hover:text-yellow-500 cursor-pointer transition-all duration-500 ease-in-out font-light'>UZAIR <span
        className=' border-none text-yellow-500 font-extrabold  hover:text-white '  >.</span></div>
      <ul className='list-none flex pt-2 justify-around gap-6 text-xl font-light cursor-pointer'>
        <li className='hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out'>Home</li>
        <li className='hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out'>About</li>
        <li className='hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out'>Services</li>
        <li className='hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out'>My Skills</li>
        <li className='hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out'>My Work</li>
        <img className='md:hidden' src="./Image/menu.svg" alt="" />
      </ul>
    </nav>
  )
}
function Dropdown() {
  return (
    <ul className=' hidden About_me absolute list-none w-full p-8  flex-col  justify-center items-center gap-6 text-xl font-light cursor-pointer'>
      <img className='absolute top-0 right-0 m-4' src="./Image/cancel.svg" alt="cancel" />
      <li className='hover: p-4 text-center transition-all duration-100 ease-in-out'>Home</li>
      <li className=' p-4 text-center transition-all duration-100 ease-in-out'>About</li>
      <li className=' p-4 text-center transition-all duration-100 ease-in-out'>Services</li>
      <li className=' p-4 text-center transition-all duration-100 ease-in-out'>My Skills</li>
      <li className=' p-4 text-center transition-all duration-100 ease-in-out'>My Work</li>
      <li className=' p-4 text-center transition-all duration-100 ease-in-out'>Contact Me</li>
    </ul>
  )
}
function Home() {
  return (
    <div className='w-full main md:p-12 p-4 py-12 text-white'>
      <Dropdown />
      <div className="flex w-full  lg:gap-0 md:gap-8 gap-8 justify-around  max-md:flex-col ">
        <div className=" left md:w-3/5 w-full flex  flex-col justify-center  ">
          <h2 className='leading-normal lg:text-3xl text-2xl   font-light text-start '>Aoa, My name is </h2>
          <h1 className='lg:text-5xl text-3xl  text-yellow-500'>Uzair Ahmad Khan</h1>
          <p className='leading-normal font-light text-3xl lg:text-4xl'>I'm a Web Designer <span className='text-yellow-500'>&</span> Frontend<br /> Developer</p>
          <div className='w-auto flex gap-2'>
            <button className='py-4  text-md md:text-2xl lg:w-52 md:w-40 w-28 my-2 bg-yellow-500 text-white hover:bg-transparent border-2 border-yellow-500 transition-all duration-300 ease-in-out hover:text-yellow-500'>Download CV</button>
            <button className='py-4  text-md md:text-2xl lg:w-52 md:w-40 w-28 my-2 border-2 border-yellow-500  text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all duration-300 ease-in-out'>Let's Talk</button>
          </div>
        </div>
        <div className="right flex items-center justify-center md:p-4">
          <img className='md:w-96 w-full  ' src="./image/1.jpg" alt="imggg" />
        </div>
      </div>
    </div>
  )
}

function AboutMe() {
  return (
    <div className="About_me flex  flex-row-reverse justify-around  gap-4 max-md:flex-col items-center  text-white w-full py-12">
      <div className="left w-3/5 flex  flex-col items-start ">
        <h1 className='leading-normal ml-12 text-4xl  text-start'>About <span className='text-yellow-500'>Me</span></h1>
        <p className='leading-normal ml-12 text-lg font-light w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aut accusantium nobis quam, possimus consequatur quae, quaerat perferendis eum voluptate dolores iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt sapiente a enim aspernatur voluptatibus harum? Odit corporis quam dolorem repellat ab ducimus reiciendis molestiae non eum, dolor error quisquam quis consequatur reprehenderit quidem nobis distinctio velit fugit id iure. Repudiandae, praesentium sed eligendi consectetur hic quia animi ullam alias. Inventore odio aspernatur tempore praesentium nisi, voluptatum nobis consectetur? Quia.</p>
        <button className='px-4 py-2 m-4 ml-12  text-xl w-44 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all transition-300 ease-in-out'>Let's Talk</button>
      </div>
      <div className="right flex items-center justify-center w-2/5 ">
        <img className='w-96' src="./image/aboutimg.jpg" alt="imggg" />
      </div>
    </div>
  )
}

function ContactMe() {
  return (
    <div className="About_me contact w-full p-4 h-fit py-12 flex flex-col justify-center items-center">
      <h1 className="text-4xl p-4">Contact <span className="text-yellow-500">Me</span></h1>
      <div className='flex flex-wrap gap-2  justify-center'>
        <Contact name='+923135167976' source='./Image/call_3178167.png' />
        <Contact name='Kamra,Pakistan' source='./Image/location_535239.png' />
        <Contact name='uzairahmadkhanmalik@gmail.com' source='./Image/email_561127.png' />
      </div>
    </div>
  )
}

function Contact(props) {
  return (
    <div className='sm:w-80 w-64  card p-8'>
      <img className="w-12 m-4 invert-[1] flex justify-center items-center" src={props.source} alt="" />
      <h1 className='sm:text-lg text-sm text-yellow-300'>{props.name}</h1>
    </div>
  )
}
Contact.propTypes = {
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

function Footer() {
  return (
    <div>
      <footer className='text-white p-8 md:text-xl sm:text-md text-sm main font-thin text-center'>
        <p> &#169;2024 Copyright Reserved  | Uzair's Portfolio</p>
      </footer>
    </div>
  )
}
export default App

