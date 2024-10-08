import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

function About() {
  let tl2 = gsap.timeline();

  useGSAP(() => {
    tl2.from(
      ".aboutleft",
      {
        x: -100,
        opacity: 0.7,
        duration: 1,
      },
      "lll"
    );
    tl2.from(
      ".aboutimage",
      {
        scale: 0.7,
        opacity: 0,
        duration: 0.6,
      },
      "lll"
    );
  });

  return (
    <div className="aboutpage About_me flex justify-around p-4 md:p-12 lg:h-[80vh] h-auto md:gap-8 max-md:flex-col items-center text-white w-full py-12">
      <div className="aboutleft md:w-3/5 md:px-12 w-full flex flex-col">
        <h1 className="leading-normal text-4xl text-center ">
          About <span className="text-yellow-500">Me</span>
        </h1>
        <h2 className="text-start text-3xl text-yellow-500 font-light">
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
          Lets Talk
        </button>
      </div>
      <div className="right flex items-center  justify-center md:w-2/5 w-full">
        <img
          className="aboutimage rounded-md md:w-96 w-full"
          src="./image/aboutimg.jpg"
          alt="imggg"
        />
      </div>
    </div>
  );
}

export default About;
