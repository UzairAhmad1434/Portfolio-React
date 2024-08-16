import Skill from "./Skill";
function MySkill() {
  //   let tl3 = gsap.timeline();

  //   useGSAP(() => {
  //     tl3.from(".heading2", {
  //       y: -50,
  //       duration: 1,
  //       delay: 0.5,
  //       scrollTrigger: {
  //         trigger: ".skillpage",
  //         scroller: "body",
  //         top: "center 60%",
  //         end: "center 20%",
  //         scrub: 2,
  //       },
  //     });
  //   });
  //   useGSAP(() => {
  //     tl3.from(".scale", {
  //       y: -50,
  //       duration: 0.7,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: ".skillpage",
  //         scroller: "body",
  //         top: "top 0%",
  //         staggers: 0.3,
  //         end: "top -100%",
  //         scrub: 2,
  //       },
  //     });
  //   });
  return (
    <div className="About_me skillpage flex-col items-center justify-center p-4 md:p-8 ">
      <h1 className="heading2 text-4xl p-4 text-center">
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
export default MySkill;
