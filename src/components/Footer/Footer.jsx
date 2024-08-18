import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Footer() {
  useGSAP(() => {
    gsap.from(".footerr", {
      y: -50,
      duration: 1,
    });
  });
  return (
    <div>
      <footer className="text-stone-200 p-4 h-[10vh] md:text-xl sm:text-md text-sm main font-thin text-center">
        <p className="footerr">
          {" "}
          &#169;2024 Copyright Reserved | Uzair&#x2019;s Portfolio
        </p>
      </footer>
    </div>
  );
}
export default Footer;
