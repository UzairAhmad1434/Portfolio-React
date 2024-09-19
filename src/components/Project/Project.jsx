import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Project = () => {
  let tl = gsap.timeline();

  useGSAP(() => {
    // tl.from("img", {
    //   rotate: 48,
    //   duration: 0.5,
    // });
    tl.from(
      ".project",
      {
        y: -100,
        opacity: 0,
        scale: 0.4,
        duration: 0.8,
      },
      "ll"
    );
    tl.from(
      ".pract",
      {
        y: -100,
        opacity: 0,
        scale: 0.4,
        stagger: 0.3,
        duration: 0.8,
      },
      "ll"
    );
  });
  return (
    <>
      <div className="text-white About_me skillpage flex-col md:h-[80vh] sm:h-auto items-center justify-center p-4 md:p-8 ">
        <h1 className="project heading2 text-4xl px-4 text-center">
          My <span className="text-yellow-500">Projects</span>
        </h1>
        <div className="flex  font-medium flex-wrap flex-row gap-4 items-center p-4 justify-center ">
          <div className="relative pract p-2 flex items-center justify-center flex-col w-72 h-48 rounded-md">
            <div className="absolute inset-0 bg-store bg-cover bg-center opacity-50 rounded-md"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-2xl text-yellow-500 font-medium">
                Ecommerce Store
              </h1>
              <p className="text-md text-center mb-4 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                aperiam harum
              </p>
              <a href="https://github.com/UzairAhmad1434/U_store-Ecommerce-store">
                <button className="bg-white p-2 rounded-full transition-transform duration-300 ease-in-out  hover:rotate-45">
                  <img src="./Image/arrow.svg" alt="" />
                </button>
              </a>
            </div>
          </div>

          <div className="relative pract p-2 flex items-center justify-center flex-col w-72 h-48 rounded-md">
            <div className="absolute inset-0 bg-tictac bg-cover bg-center opacity-50 rounded-md"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-2xl text-yellow-500 font-medium">
                Tic Tac Toe
              </h1>
              <p className="text-md text-center mb-4 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                aperiam harum
              </p>
              <a href="https://github.com/UzairAhmad1434/TIC_TAC_TOE">
                <button className="bg-white p-2 rounded-full transition-transform duration-300 ease-in-out  hover:rotate-45">
                  <img src="./Image/arrow.svg" alt="" />
                </button>
              </a>
            </div>
          </div>

          <div className="relative pract p-2 flex items-center justify-center flex-col w-72 h-48 rounded-md">
            <div className="absolute inset-0 bg-currency bg-cover bg-center opacity-50 rounded-md"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-2xl text-yellow-500 font-medium">
                Currency Converter
              </h1>
              <p className="text-md text-center mb-4 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                aperiam harum
              </p>
              <a href="https://github.com/UzairAhmad1434/currency_Converter">
                <button className="bg-white p-2 rounded-full transition-transform duration-300 ease-in-out  hover:rotate-45">
                  <img src="./Image/arrow.svg" alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="relative pract p-2 flex items-center justify-center flex-col w-72 h-48 rounded-md">
            <div className="absolute inset-0 bg-calculator bg-cover bg-center opacity-50 rounded-md"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-2xl text-yellow-500 font-medium">
                Calculator
              </h1>
              <p className="text-md text-center bg-opacity-0 mb-4 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                aperiam harum
              </p>
              <a href="https://github.com/UzairAhmad1434/JavaScript-Calculator">
                <button className="bg-white p-2 rounded-full transition-transform duration-300 ease-in-out  hover:rotate-45">
                  <img src="./Image/arrow.svg" alt="" />
                </button>
              </a>
            </div>
          </div>

          <div className="relative pract p-2 flex items-center justify-center flex-col w-72 h-48 rounded-md">
            <div className="absolute inset-0 bg-study bg-cover bg-center opacity-50 rounded-md"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-2xl text-yellow-500 font-medium">
                StudyBuddy
              </h1>
              <p className="text-md text-center mb-4 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                aperiam harum
              </p>
              <a href="https://github.com/UzairAhmad1434/studybuddy">
                <button className="bg-white p-2 rounded-full transition-transform duration-300 ease-in-out  hover:rotate-45">
                  <img src="./Image/arrow.svg" alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="relative pract p-2 flex items-center justify-center flex-col w-72 h-48 rounded-md">
            <div className="absolute inset-0 bg-weather bg-cover bg-center opacity-50 rounded-md"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-2xl text-yellow-500 font-medium">
                Weather App
              </h1>
              <p className="text-md text-center mb-4 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                aperiam harum
              </p>
              <a href="https://github.com/UzairAhmad1434/WeatherApp">
                <button className="bg-white p-2 rounded-full transition-transform duration-300 ease-in-out  hover:rotate-45 ">
                  <img src="./Image/arrow.svg" alt="" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
