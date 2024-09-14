import Input from "./Input";
import Right from "./Right";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BorderBeam } from "@/components/magicui/border-beam";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

function ContactMe() {
  let tl4 = gsap.timeline();
  useGSAP(() => {
    tl4.from(
      ".contact_card",
      {
        // scale: 0.4,
        x: -200,
        duration: 1,
      },
      "ll"
    );
    tl4.from(
      ".contactcard",
      {
        y: -50,
        duration: 1,
        stagger: 0.3,
      },
      "ll"
    );
  });

  return (
    <div className="md:h-[80vh] h-auto About_me md:p-8 p-4 gap-8 flex lg:flex-row-reverse flex-col-reverse contact w-full justify-center items-center">
      <div className="w-full flex flex-col items-center  gap-4 px-2 py-4 sm:p-4">
        <Right
          className="contactcard"
          name="+923135167976"
          source="./Image/phone.svg"
        />
        <Right name="Kamra,Pakistan" source="./Image/location.svg" />
        <Right
          name="uzairahmadkhanmalik@gmail.com"
          source="./Image/email.svg"
        />
      </div>
      <div className="contact_card  h-auto md:h-[75vh] flex hover shadow-blue-600 shadow-md justify-center md:p-8 p-4 rounded-xl w-full flex-col items-center  lg:mx-8 main gap-2">
        <BorderBeam
          size={300}
          duration={20}
          colorFrom="yellow"
          colorTo="orange"
        />
        <h1 className="text-yellow-500 sm:text-3xl text-lg sm:text-start m-0 sm:m-4 text-center">
          Let&#x2019;s Work Together
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
