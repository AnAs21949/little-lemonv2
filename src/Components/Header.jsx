import { useEffect, useRef, useState } from "react";
import logoImg from "../assets/Logo.svg";
import hamburgerIcon from "../assets/icon _hamburger menu.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [navbarTop, setNavbarTop] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const headerRef = useRef(0);
  useEffect(() => {
    const updateNavbarTop = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.clientHeight;
        // console.log(headerHeight);
        setNavbarTop(headerHeight); // Adjust the offset as needed
      }
    };

    // Initial update
    updateNavbarTop();

    // Attach event listener to update header height on window resize
    window.addEventListener("mousemove", updateNavbarTop);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", updateNavbarTop);
    };
  }, []);

  const handleHamburger = () => {
    setShowNav((perv) => !perv);
  };

  return (
    <div
      className="bg-white justify-between py-4 md:px-24 flex "
      ref={headerRef}
    >
      <div className="flex w-full lg:w-fit justify-between items-center px-5">
        <img src={logoImg} alt="" className="" />
        <button onClick={handleHamburger} className="lg:hidden">
          <img src={hamburgerIcon} alt="" className="" />
        </button>
      </div>
      <nav
        className={`z-20 absolute w-full px-0 left-0 top-[${navbarTop}px] bg-[#333333] lg:bg-white ${
          showNav ? "h-fit overflow-visible py-6" : "h-0 overflow-hidden"
        }    transition-all ease-in-out duration-75 lg:static lg:overflow-visible `}
      >
        <ul
          className=" flex flex-col lg:flex-row  lg:text-[#495E57]
         items-center lg:justify-end	 justify-center gap-7  font-p text-center text-lg font-semibold text-white"
        >
          <li className="w-full lg:w-fit cursor-pointer  ">
            <NavLink
              className={({ isActive }) => {
                return `${
                  isActive ? "bg-[#495E57] text-white py-1 px-2 rounded-lg" : ""
                }`;
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="w-full lg:w-fit cursor-pointer">About</li>
          <li className="w-full lg:w-fit cursor-pointer">Services</li>
          <li className="w-full lg:w-fit cursor-pointer">Menu</li>
          <li className="w-full lg:w-fit cursor-pointer">
            <NavLink
              className={({ isActive }) => {
                return `${
                  isActive ? "bg-[#495E57] text-white py-1 px-2 rounded-lg" : ""
                }`;
              }}
              to="/Reservation"
            >
              Reservation
            </NavLink>
          </li>
          <li className="w-full lg:w-fit cursor-pointer">order Online</li>
          <li className="w-full lg:w-fit cursor-pointer">Login</li>
        </ul>
      </nav>
    </div>
  );
};
