import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Right({ source, name }) {
  useGSAP(() => {
    gsap.from(".contactcard", {
      y: -50,
      duration: 1,
      delay: 1,
      stagger: 0.3,
    });
  });
  return (
    <div className="contactcard About_me w-full flex sm:flex-row flex-col items-center rounded-md p-2 shadow-sm shadow-black">
      <div className="bg-yellow-500 rounded-md m-2 sm:mx-2">
        <img className="p-2 w-12 m-2 invert-[1]" src={source} alt="" />
      </div>
      <p className="sm:text-xl text-lg text-yellow-500 font-medium">{name}</p>
    </div>
  );
}
export default Right;