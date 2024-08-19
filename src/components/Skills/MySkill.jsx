import Skill from "./Skill";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function MySkill() {
  let tl3 = gsap.timeline();

  useGSAP(() => {
    tl3.from(
      ".heading2",
      {
        y: -50,
        duration: 0.7,
        opacity: 0,
      },
      "llll"
    );
  });
  useGSAP(() => {
    tl3.from(
      ".scale",
      {
        // x: -50,
        duration: 0.9,
        width: 0,
        opacity: 0,
      },
      "llll"
    );
  });
  return (
    <div className="text-white About_me skillpage flex-col md:h-[80vh] sm:h-auto items-center justify-center p-4 md:p-8 ">
      <h1 className="heading2 text-4xl p-4 text-center">
        My <span className="text-yellow-500">Skills</span>
      </h1>
      <div className="flex flex-wrap gap-4 items-center justify-center font-medium">
        <Skill width="w-[100%]" name="Html" percent="100%" />
        <Skill width="w-[90%]" name="Css" percent="90%" />
        <Skill width="w-[78%]" name="Javascript" percent="78%" />
        <Skill width="w-[100%]" name="Tailwind" percent="100%" />
        <Skill width="w-[80%]" name="React" percent="80%" />
        <Skill width="w-[75%]" name="Django" percent="75%" />
      </div>
    </div>
  );
}
export default MySkill;
