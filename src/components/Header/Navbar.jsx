import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <nav className="About_me h-[10vh] p-2 flex sticky top-0 w-full main text-black-300 justify-between text-white z-50">
        <div className="pl-8 logo text-4xl flex items-center hover:text-yellow-500 cursor-pointer transition-all duration-500 ease-in-out font-light">
          UZAIR{" "}
          <span className="border-none text-yellow-500 font-extrabold hover:text-white">
            .
          </span>
        </div>
        <ul className="list-none flex pt-2 pr-8 justify-around items-center gap-6 text-lg font-light cursor-pointer">
          <li>
            <NavLink
              to="Home"
              className={({ isActive }) =>
                `hidden ${
                  isActive ? "border-b-2 border-yellow-500" : "border-b-0"
                } md:flex transition-all duration-100 ease-in-out`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="About"
              className={({ isActive }) =>
                `hidden ${
                  isActive ? "border-b-2 border-yellow-500" : "border-b-0"
                } md:flex transition-all duration-100 ease-in-out`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Service"
              className={({ isActive }) =>
                `hidden ${
                  isActive ? "border-b-2 border-yellow-500" : "border-b-0"
                } md:flex transition-all duration-100 ease-in-out`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Contact"
              className={({ isActive }) =>
                `hidden ${
                  isActive ? "border-b-2 border-yellow-500" : "border-b-0"
                } md:flex transition-all duration-100 ease-in-out`
              }
            >
              Contact Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Skills"
              className={({ isActive }) =>
                `hidden ${
                  isActive ? "border-b-2 border-yellow-500" : "border-b-0"
                } md:flex transition-all duration-100 ease-in-out`
              }
            >
              Skills
            </NavLink>
          </li>

          <li className="hidden md:flex text-md text-yellow-500 py-2 font-bold border-yellow-500 border-2 fill justify-center items-center px-4 ml-12 rounded-full bg-transparent transition-all duration-100 ease-in-out">
            Hire Me
          </li>
          <img
            className="md:hidden w-8 h-8"
            alt="menu"
            src={isOpen ? "./Image/cancel.svg" : "./Image/menu.svg"}
            onClick={() => setIsOpen(!isOpen)}
          />
        </ul>
        {isOpen && <Dropdown setIsOpen={setIsOpen} />}
      </nav>
    </>
  );
};

function Dropdown({ setIsOpen }) {
  return (
    <ul className="flex dropdown About_me absolute top-28 left-0 list-none w-full p-8 flex-col justify-center items-center gap-6 text-xl font-light cursor-pointer bg-gray-900">
      <li className="li flex text-md px-4 hover:bg-yellow-600 w-full items-center justify-center bg-yellow-500 transition-all duration-100 ease-in-out">
        Hire Me
      </li>
      <li className="li p-4 text-center transition-all duration-100 ease-in-out  border-yellow-500">
        <NavLink to="Home" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
      </li>
      <li className="p-4 text-center transition-all duration-100 ease-in-out  border-yellow-500">
        <NavLink to="About" onClick={() => setIsOpen(false)}>
          About
        </NavLink>
      </li>
      <li className="p-4 text-center transition-all duration-100 ease-in-out border-yellow-500">
        <NavLink to="Service" onClick={() => setIsOpen(false)}>
          Services
        </NavLink>
      </li>
      <li className="p-4 text-center transition-all duration-100 ease-in-out  border-yellow-500">
        <NavLink to="Skills" onClick={() => setIsOpen(false)}>
          Skills
        </NavLink>
      </li>
      <li className="p-4 text-center transition-all duration-100 ease-in-out border-yellow-500">
        <NavLink to="Contact" onClick={() => setIsOpen(false)}>
          Contact Me
        </NavLink>
      </li>
    </ul>
  );
}
Dropdown.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Navbar;
