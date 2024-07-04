import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let tl2 = gsap.timeline();

  useGSAP(() => {
    tl2.from(".cards", {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 1,
      rotate: 10,
    });
  });
  useGSAP(() => {
    tl2.from(".up", {
      y: -50,
      scale: 0.6,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  });

  return (
    <div className="slider-container">
      <div className="main slider-container p-8">
        <h1 className="up text-4xl p-4 text-center">
          My <span className="text-yellow-500">Services</span>
        </h1>
        <Slider {...settings}>
          <Card card="Web Development" />
          <Card card="Web Design" />
          <Card card="Webflow Development" />
          <Card card="Photography" />
          <Card card="Clean Code" />
        </Slider>
      </div>
    </div>
  );
}

function Myskills() {
  useGSAP(() => {
    gsap.from(".scale", {
      x: -50,
      scale: 0.6,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  });
  return (
    <div className="About_me flex-col items-center justify-center p-4 md:p-8 ">
      <h1 className="up text-4xl p-4 text-center">
        My <span className="text-yellow-500">Skills</span>
      </h1>
      <div className="flex flex-wrap gap-4 items-center justify-center font-medium">
        <Skill width="w-[100%]" name="Html" percent="100%" />
        <Skill width="w-[90%]" name="Css" percent="90%" />
        <Skill width="w-[70%]" name="Javascript" percent="70%" />
        <Skill width="w-[80%]" name="Tailwind" percent="90%" />
        <Skill width="w-[80%]" name="React" percent="80%" />
      </div>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="scale p-4 flex flex-col gap-2 md:w-[45%] w-[90%]">
      <div className="flex justify-between">
        <h1>{props.name}</h1>
        <h1>{props.percent}</h1>
      </div>
      <div className="w-full bg-blue-800 rounded-md">
        <div className={`${props.width} bg-yellow-500 h-2 rounded-md`}></div>
      </div>
    </div>
  );
}

Skill.propTypes = {
  width: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
};

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
    <div>
      <div className="text-white overflow-none">
        <NAV isOpen={isOpen} setIsOpen={setIsOpen} />
        <Home isOpen={isOpen} setIsOpen={setIsOpen} />
        <AboutMe />
        <Responsive />
        <Myskills />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className=".cards md:w-80 w-full main md:p-8 p-4 md:m-4 m-2 rounded-md shadow-sm shadow-yellow-500">
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

Card.propTypes = {
  card: PropTypes.string.isRequired,
};

function NAV({ isOpen, setIsOpen }) {
  useGSAP;
  return (
    <nav className="About_me p-2 flex sticky top-0 w-full main text-black-300 justify-around text-white z-50">
      <div className="logo text-4xl flex items-center hover:text-yellow-500 cursor-pointer transition-all duration-500 ease-in-out font-light">
        UZAIR{" "}
        <span className="border-none text-yellow-500 font-extrabold hover:text-white">
          .
        </span>
      </div>
      <ul className="list-none flex pt-2 justify-around items-center gap-6 text-xl font-light cursor-pointer">
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
        <li className="hidden md:flex text-md text-yellow-500 py-2 font-bold border-yellow-500 border-2 fill justify-center items-center px-4  ml-12 rounded-full bg-transparent transition-all duration-100 ease-in-out">
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

NAV.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

function Dropdown({ setIsOpen }) {
  return (
    <ul className="flex About_me absolute top-28 left-0 list-none w-full p-8 flex-col justify-center items-center gap-6 text-xl font-light cursor-pointer bg-gray-900">
      <li className="flex text-md px-4 hover:bg-yellow-600 w-full items-center justify-center bg-yellow-500 transition-all duration-100 ease-in-out">
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

Dropdown.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

function Home({ isOpen, setIsOpen }) {
  const headingref = useRef();
  let tl = gsap.timeline();

  useGSAP(() => {
    tl.from(headingref.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      rotate: 10,
    });
  });
  useGSAP(() => {
    tl.from(".roll", {
      x: 20,
      rotate: 360,
      duration: 1,
    });
  });
  useGSAP(() => {
    tl.from(".image", {
      scale: 0.7,
      x: 100,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <div className="w-full main md:p-12 p-4 py-12 text-white">
      <div className="flex w-full lg:gap-0 md:gap-8 gap-8 justify-around max-md:flex-col">
        <div
          ref={headingref}
          className="left md:w-3/5 md:px-8 w-full flex flex-col justify-center"
        >
          <h2
            // ref={headingref}
            className="leading-normal lg:text-3xl text-2xl font-light text-start"
          >
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
          <div className="lg:h-16 h-12 my-8 flex gap-2">
            <button className="slide lg:p-4 p-2 fill font-bold gap-2 flex items-center justify-center text-md lg:text-xl rounded-full lg:w-52 w-40 text-yellow-500 bg-transparent border-2 border-yellow-500 transition-all duration-300 ease-in-out">
              <p>Download CV</p>
              <img className="" src="./Image/download.svg" alt="" />
            </button>
            <button className="roll lg:p-4 p-2 fill rounded-full border-2 border-yellow-500">
              <a href="https://www.linkedin.com/in/uzair1434/">
                <img className="fill" src="./Image/linkedin.svg" alt="" />
              </a>
            </button>
            <button className="roll lg:p-4 p-2 fill rounded-full border-2 border-yellow-500">
              <a href="https://github.com/UzairAhmad1434">
                <img src="./Image/github.svg" alt="" />
              </a>
            </button>
          </div>
        </div>
        <div className="right flex items-center justify-center md:p-4">
          <img
            className="image md:w-96 w-full"
            src="./image/1.jpg"
            alt="imggg"
          />
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

function AboutMe() {
  const aboutref = useRef();

  let tl2 = gsap.timeline();

  useGSAP(() => {
    tl2.from(aboutref.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 2,
      rotate: 10,
    });
  });

  return (
    <div className="About_me flex justify-around p-4 md:p-12 md:gap-8 max-md:flex-col items-center text-white w-full py-12">
      <div
        ref={aboutref}
        className="left md:w-3/5 md:px-12 w-full flex flex-col items-start"
      >
        <h1 className="leading-normal text-4xl text-start">
          About <span className="text-yellow-500">Me</span>
        </h1>
        <h2 className="text-start text-3xl text-yellow-500 font-bold">
          Front-end Developer
        </h2>
        <p className="leading-normal text-lg font-light w-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          soluta suscipit quisquam recusandae, incidunt est vitae distinctio
          sed, accusantium eligendi nisi ut! Illo, quia reprehenderit, quidem
          debitis pariatur officiis distinctio, repellat repellendus molestias
          possimus aliquid. Voluptate, iusto.
        </p>
        <button className="btn px-4 my-6 py-2 text-xl font-bold w-44 rounded-full border-2 border-yellow-500 text-yellow-500 fill transition-all transition-300 ease-in-out">
          Let's Talk
        </button>
      </div>
      <div className="right flex items-center justify-center md:w-2/5 w-full">
        <img
          className="image md:w-96 w-full"
          src="./image/aboutimg.jpg"
          alt="imggg"
        />
      </div>
    </div>
  );
}

function ContactMe() {
  useGSAP(() => {
    gsap.from(".contact_card", {
      x: -500,
      scale: 0.4,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  });

  return (
    <div className="About_me md:p-8 p-4 flex lg:flex-row-reverse flex-col contact w-full justify-center items-center">
      <div className="w-full flex flex-col items-center h-fit gap-4 px-2 py-4 sm:p-4">
        <Contact name="+923135167976" source="./Image/phone.svg" />
        <Contact name="Kamra,Pakistan" source="./Image/location.svg" />
        <Contact
          name="uzairahmadkhanmalik@gmail.com"
          source="./Image/email.svg"
        />
      </div>
      <div className="contact_card flex hover shadow-sm shadow-black justify-center md:p-8 py-4 rounded-xl w-full flex-col items-center m-0 lg:mx-8 main gap-4">
        <h1 className="text-yellow-500 sm:text-3xl text-xl sm:text-start m-0 sm:m-4 text-center">
          Let's Work Together
        </h1>
        <p className="sm:px-12 px-8 hover:none font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
          temporibus qui magni saepe. Maxime.
        </p>
        <div className="display sm:text-lg text-md flex flex-wrap gap-4 sm:gap-8 items-center justify-center">
          <Input type="text" placeholder="First Name" class="half" />
          <Input type="text" placeholder="Last Name" class="half" />
          <Input type="text" placeholder="Phone Number" class="half" />
          <Input type="text" placeholder="Location" class="half" />
          <Input type="email" placeholder="Email" class="full" />

          <textarea
            className="side full About_me text-lg text-white p-4 hover rounded-md transition-all transition-300 ease-in-out"
            name="textarea"
            placeholder="Type Your Message Here"
            id=""
          ></textarea>
          <button
            className=" px-4 py-2 text-md lg:text-xl fill font-medium rounded-full bg-transparent text-yellow-500 border-2 border-yellow-500 transition-all transition-300 ease-in-out"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

function Input(props) {
  return (
    <input
      className={`${props.class} side text-white py-2 px-4 About_me rounded-md transition-all transition-300 ease-in-out`}
      type={props.type}
      name="email"
      placeholder={props.placeholder}
      id=""
    />
  );
}

Input.propTypes = {
  class: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

function Contact(props) {
  return (
    <div className="scale About_me w-full flex sm:flex-row flex-col items-center rounded-md p-2 shadow-sm shadow-black">
      <div className="bg-yellow-500 rounded-md m-2 sm:mx-2">
        <img className="p-2 w-12 m-2 invert-[1]" src={props.source} alt="" />
      </div>
      <p className="sm:text-xl text-lg text-yellow-500 font-medium">
        {props.name}
      </p>
    </div>
  );
}

Contact.propTypes = {
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

function Footer() {
  useGSAP(() => {
    gsap.from(".footerr", {
      y: 500,
      scale: 0.6,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  });
  return (
    <div>
      <footer className="text-stone-200 p-8 md:text-xl sm:text-md text-sm main font-thin text-center">
        <p className="footerr">
          {" "}
          &#169;2024 Copyright Reserved | Uzair's Portfolio
        </p>
      </footer>
    </div>
  );
}

export default App;
