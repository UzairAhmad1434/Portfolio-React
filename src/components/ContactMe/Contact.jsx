import Input from "./Input";
import Right from "./Right";

function ContactMe() {
  //   let tl4 = gsap.timeline();
  //   useGSAP(() => {
  //     tl4.from(".contact_card", {
  //       // scale: 0.4,
  //       x: -200,
  //       duration: 1,
  //       delay: 0.5,
  //       scrollTrigger: {
  //         trigger: ".contact",
  //         scroller: "body",
  //         top: "center 60%",
  //         end: "center 20%",
  //         scrub: 2,
  //       },
  //     });
  //   });
  //   useGSAP(() => {
  //     tl4.from(".contactcard", {
  //       x: 50,
  //       duration: 1,
  //       delay: 1,
  //       stagger: 0.3,
  //       scrollTrigger: {
  //         trigger: ".skillpage",
  //         scroller: "body",
  //         top: "top 0%",
  //         end: "top -100%",
  //         scrub: 2,
  //       },
  //     });
  //   });

  return (
    <div className="h-[80vh] About_me md:p-8 p-4 flex lg:flex-row-reverse flex-col contact w-full justify-center items-center">
      <div className="w-full flex flex-col items-center h-fit gap-4 px-2 py-4 sm:p-4">
        <Right name="+923135167976" source="./Image/phone.svg" />
        <Right name="Kamra,Pakistan" source="./Image/location.svg" />
        <Right
          name="uzairahmadkhanmalik@gmail.com"
          source="./Image/email.svg"
        />
      </div>
      <div className="contact_card  h-[75vh] flex hover shadow-sm shadow-black justify-center md:p-8  rounded-xl w-full flex-col items-center  lg:mx-8 main gap-2">
        <h1 className="text-yellow-500 sm:text-3xl text-lg sm:text-start m-0 sm:m-4 text-center">
          Let's Work Together
        </h1>

        <div className="display sm:text-lg text-md flex flex-wrap gap-4 sm:gap-8 items-center justify-center">
          <Input type="text" placeholder="First Name" className="half" />
          <Input type="text" placeholder="Last Name" className="half" />
          <Input type="text" placeholder="Phone Number" className="half" />
          <Input type="text" placeholder="Location" className="half" />
          <Input type="email" placeholder="Email" className="full" />

          <textarea
            className="side full About_me text-lg text-white py-2 px-4 hover rounded-md transition-all transition-300 ease-in-out"
            name="textarea"
            placeholder="Type Your Message Here"
            id=""
          ></textarea>
          <button
            className=" px-4 py-2 text-md lg:text-lg fill font-medium rounded-full bg-transparent text-yellow-500 border-2 border-yellow-500 transition-all transition-300 ease-in-out"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
