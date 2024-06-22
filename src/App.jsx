import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <div className="text-white overflow-none">
        <NAV isOpen={isOpen} setIsOpen={setIsOpen} />
        <Home isOpen={isOpen} setIsOpen={setIsOpen} />
        <AboutMe />
        <CardPage />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

function CardPage() {
  return (
    <div className="main services w-full flex flex-col justify-center p-4 py-12">
      <h1 className="text-4xl p-4 text-center">
        My <span className="text-yellow-500">Services</span>
      </h1>
      <div className="cards flex flex-wrap gap-2 justify-center">
        <Card card="Database" />
        <Card card="HTML / CSS" />
        <Card card="Javascript" />
        <Card card="React" />
        <Card card="Webflow" />
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="md:w-80 w-full card p-8 m-2">
      <h1 className="text-yellow-400 text-left text-2xl">{props.card}</h1>
      <p className="text-md text-left font-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id
        possimus corrupti, aliquid laudantium iste explicabo molestiae odio
        eius, praesentium ipsum. Repellendus mollitia magni enim. Maxime
        incidunt optio non aliquam accusamus, vel iste.
      </p>
    </div>
  );
}

function NAV({ isOpen, setIsOpen }) {
  return (
    <nav className="About_me p-4 flex main text-black-300 justify-around text-white">
      <div className="text-4xl hover:text-yellow-500 cursor-pointer transition-all duration-500 ease-in-out font-light">
        UZAIR{" "}
        <span className="border-none text-yellow-500 font-extrabold hover:text-white">
          .
        </span>
      </div>
      <ul className="list-none flex pt-2 justify-around gap-6 text-xl font-light cursor-pointer">
        <li className="hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out">
          Home
        </li>
        <li className="hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out">
          About
        </li>
        <li className="hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out">
          Services
        </li>
        <li className="hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out">
          My Skills
        </li>
        <li className="hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out">
          My Work
        </li>
        <li className="hidden md:flex text-md  justify-center items-center px-4 hover:bg-yellow-600 ml-12 rounded-full bg-yellow-500 transition-all duration-100 ease-in-out">
          Hire Me
        </li>
        <img
          className="md:hidden w-8 h-8"
          src={isOpen ? "./Image/cancel.svg" : "./Image/menu.svg"}
          alt="menu"
          onClick={() => setIsOpen(!isOpen)}
        />
      </ul>
      {isOpen && <Dropdown setIsOpen={setIsOpen} />}
    </nav>
  );
}

function Dropdown({ setIsOpen }) {
  return (
    <ul className="flex About_me absolute top-28 left-0 list-none w-full p-8 flex-col justify-center items-center gap-6 text-xl font-light cursor-pointer bg-gray-900">
      <li className="flex text-md   px-4 hover:bg-yellow-600  w-full  items-center justify-center bg-yellow-500 transition-all duration-100 ease-in-out">
        Hire Me
      </li>
      <li className="p-4 text-center transition-all duration-100 ease-in-out hover:border-b-2 border-yellow-500">
        Home
      </li>
      <li className="p-4 text-center transition-all duration-100 ease-in-out hover:border-b-2 border-yellow-500">
        About
      </li>
      <li className="p-4 text-center transition-all duration-100 ease-in-out hover:border-b-2 border-yellow-500">
        Services
      </li>
      <li className="p-4 text-center transition-all duration-100 ease-in-out hover:border-b-2 border-yellow-500">
        My Skills
      </li>
      <li className="p-4 text-center transition-all duration-100 ease-in-out hover:border-b-2 border-yellow-500">
        My Work
      </li>
      <li className="p-4 text-center transition-all duration-100 ease-in-out hover:border-b-2 border-yellow-500">
        Contact Me
      </li>
    </ul>
  );
}

function Home({ isOpen, setIsOpen }) {
  return (
    <div className="w-full main md:p-12 p-4 py-12 text-white">
      <div className="flex w-full lg:gap-0 md:gap-8 gap-8 justify-around max-md:flex-col">
        <div className="left md:w-3/5 w-full flex flex-col justify-center">
          <h2 className="leading-normal lg:text-3xl text-2xl font-light text-start">
            Aoa, My name is{" "}
          </h2>
          <h1 className="lg:text-5xl text-4xl text-yellow-500">
            Uzair Ahmad Khan
          </h1>
          <p className="leading-normal font-light text-3xl lg:text-4xl">
            I'm a Web Designer <span className="text-yellow-500">&</span>{" "}
            Frontend
            <br /> Developer
          </p>
          <div className="w-auto flex gap-2">
            <button className="p-4 flex text-md md:text-xl lg:w-52 md:w-40 w-28 my-2 bg-yellow-500 text-white hover:bg-transparent border-2 border-yellow-500 transition-all duration-300 ease-in-out hover:text-yellow-500">
              Download CV
              <img className="pl-4" src="./Image/download.svg" alt="" />
            </button>
            <button className="py-4 text-md md:text-2xl lg:w-52 md:w-40 w-28 my-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all duration-300 ease-in-out">
              Let's Talk
            </button>
          </div>
        </div>
        <div className="right flex items-center justify-center md:p-4">
          <img className="md:w-96 w-full" src="./image/1.jpg" alt="imggg" />
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="About_me flex justify-around p-4 md:p-12 md:gap-8 max-md:flex-col items-center text-white w-full py-12">
      <div className="left md:w-3/5 w-full flex flex-col items-start">
        <h1 className="leading-normal text-4xl text-start">
          About <span className="text-yellow-500">Me</span>
        </h1>
        <p className="leading-normal text-lg font-light w-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          soluta suscipit quisquam recusandae, incidunt est vitae distinctio
          sed, accusantium eligendi nisi ut! Illo, quia reprehenderit, quidem
          debitis pariatur officiis distinctio, repellat repellendus molestias
          possimus aliquid. Voluptate, iusto.
        </p>
        <button className="px-4 my-2 py-2 text-xl w-44 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all transition-300 ease-in-out">
          Let's Talk
        </button>
      </div>
      <div className="right flex items-center justify-center md:w-2/5 w-full">
        <img
          className="md:w-96 w-full"
          src="./image/aboutimg.jpg"
          alt="imggg"
        />
      </div>
    </div>
  );
}

function ContactMe() {
  return (
    <div className="About_me contact w-full p-4 h-fit py-12 flex flex-col justify-center items-center">
      <h1 className="text-4xl p-4">
        Contact <span className="text-yellow-500">Me</span>
      </h1>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <Contact name="+923135167976" source="./Image/call_3178167.png" />
        <Contact name="Kamra,Pakistan" source="./Image/location_535239.png" />
        <Contact
          name="uzairahmadkhanmalik@gmail.com"
          source="./Image/email_561127.png"
        />
      </div>
    </div>
  );
}

function Contact(props) {
  return (
    <div className="md:w-80 w-full card p-8">
      <img className="w-12 m-4 invert-[1]" src={props.source} alt="" />
      <h1 className="sm:text-lg text-sm text-white">{props.name}</h1>
    </div>
  );
}

Contact.propTypes = {
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

function Footer() {
  return (
    <div>
      <footer className="text-stone-200 p-8 md:text-xl sm:text-md text-sm main font-thin text-center">
        <p> &#169;2024 Copyright Reserved | Uzair's Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
