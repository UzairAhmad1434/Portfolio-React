import Skill from "./Skill";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function MySkill() {
  let tl3 = gsap.timeline();

  useGSAP(() => {
    tl3.from(".heading2", {
      y: -50,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".skillpage",
        scroller: "body",
        top: "center 60%",
        end: "center 20%",
        scrub: 2,
      },
    });
  });
  useGSAP(() => {
    tl3.from(".scale", {
      x: -50,
      duration: 0.7,
      // stagger: 0.1,
      scrollTrigger: {
        trigger: ".skillpage",
        scroller: "body",
        top: "top 0%",
        staggers: 0.3,
        end: "top -100%",
        scrub: 2,
      },
    });
  });
  return (
    <div className="text-white About_me skillpage flex-col h-[90vh] items-center justify-center p-4 md:p-8 ">
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
