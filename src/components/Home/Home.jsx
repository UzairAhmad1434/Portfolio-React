import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TypingAnimation from "../magicui/typing-animation";

function Home() {
  let tl = gsap.timeline();

  useGSAP(() => {
    tl.from(
      ".leftside",
      {
        x: -100,
        opacity: 0,
        duration: 0.8,
      },
      "ll"
    );
    tl.from(
      ".roll",
      {
        x: 20,
        rotate: 360,
        duration: 1,
        stagger: 0.5,
      },
      "ll"
    );
    tl.from(
      ".homeimage",
      {
        scale: 0.4,
        opacity: 0,
        duration: 0.8,
      },
      "ll"
    );
  });

  return (
    <div className="homepage bg-black md:h-[80vh] h-auto w-full main md:p-12 p-4 py-12 text-white">
      <div className="flex w-full lg:gap-0 md:gap-8 gap-8 justify-around max-md:flex-col">
        <div className="left leftside md:w-3/5 md:px-8 w-full flex flex-col justify-center">
          <h2 className="leading-normal lg:text-3xl text-2xl font-light text-start">
            Aoa, My name is{" "}
          </h2>
          <TypingAnimation
            className="text-left lg:text-5xl font-normal text-4xl text-yellow-500"
            text="Uzair Ahmad Khan"
          />

          {/* <h1 className="lg:text-5xl text-4xl text-yellow-500">
            Uzair Ahmad Khan
          </h1> */}
          <p className="leading-normal font-light text-3xl lg:text-4xl">
            Im a Web Designer <span className="text-yellow-500">&</span>{" "}
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
            className="homeimage md:w-96 w-full"
            src="./image/1.jpg"
            alt="imggg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
