const Navbar = () => {
  return (
    <>
      <nav className=" About_me   p-2 flex sticky top-0 w-full main text-black-300 justify-around text-white z-50">
        <div className="logo text-4xl flex items-center hover:text-yellow-500 cursor-pointer transition-all duration-500 ease-in-out font-light">
          UZAIR{" "}
          <span className="border-none text-yellow-500 font-extrabold hover:text-white">
            .
          </span>
        </div>
        <ul className="list-none flex pt-2 justify-around items-center gap-6 text-xl font-light cursor-pointer">
          <li className="hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out">
            Home
          </li>
          <li className="hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out">
            About
          </li>
          <li className="hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out">
            Services
          </li>
          <li className="hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out">
            My Skills
          </li>
          <li className="hidden md:flex hover:border-b-2 border-yellow-500 transition-all duration-100 ease-in-out">
            My Work
          </li>
          <li className="hidden md:flex text-md text-yellow-500 py-2 font-bold border-yellow-500 border-2 fill justify-center items-center px-4  ml-12 rounded-full bg-transparent transition-all duration-100 ease-in-out">
            Hire Me
          </li>
          <img
            className="md:hidden w-8 h-8"
            alt="menu"
            // src={isOpen ? "./Image/cancel.svg" : "./Image/menu.svg"}
            // alt="menu"
            // onClick={() => setIsOpen(!isOpen)}
          />
        </ul>
        {/* {isOpen && <Dropdown setIsOpen={setIsOpen} />} */}
      </nav>
    </>
  );
};

export default Navbar;
