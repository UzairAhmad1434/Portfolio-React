function Footer() {
  //   useEffect(() => {
  //     gsap.from(".footerr", {
  //       y: 10,
  //       duration: 1,
  //       // delay: 0.4,
  //     });
  //   });
  return (
    <div>
      <footer className="text-stone-200 p-8 md:text-xl sm:text-md text-sm main font-thin text-center">
        <p className="footerr">
          {" "}
          &#169;2024 Copyright Reserved | Uzair's Portfolio
        </p>
      </footer>
    </div>
  );
}
export default Footer;
