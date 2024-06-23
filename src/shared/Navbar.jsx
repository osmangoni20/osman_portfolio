import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(section);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const [showNav,setShowNab]=useState(true)
  const HandleNavbar=()=>{
      setShowNab(()=>!showNav)
  }
  return (
    <div>
      <div className="flex items-center pl-0 p-[0.5rem] min-h-[4rem] w-full z-10 primary_color_bg fixed top-0 shadow-sm shadow-white">
        <div className="navbar-start text-2xl md:flex items-center">
          <div onClick={HandleNavbar} className=" dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
           {
            showNav&& <ul tabIndex={0} onClick={HandleNavbar} className="text-2xl h-[600px] left-0 menu menu-sm 
            ml-0 primary_color_bg 
            dropdown-content z-20 px-10 shadow ">
              <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeroute" : undefined
                 }
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li onClick={() => scrollToSection("service")}>
              <NavLink
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/project"}
                className={({ isActive }) =>
                  isActive ? "activeroute" : undefined
                 }
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  isActive ? "activeroute" : undefined
                 }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "activeroute" : undefined
                 }
              >
                Contact
              </NavLink>
            </li>
            </ul>
           }
          </div>
          <h2 className="font-bold px-2 text-2xl lg:block hidden">Mohamad Osman Goni</h2>
        </div>
        <div className=" w-full hidden md:flex text-2xl lg:flex">
          <ul className="navbar-end menu-horizontal flex  gap-10 py-2 w-full   px-1 text-2xl">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeroute" : undefined
                 }
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li onClick={() => scrollToSection("service")}>
              <NavLink
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/project"}
                className={({ isActive }) =>
                  isActive ? "activeroute" : undefined
                 }
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  isActive ? "activeroute" : undefined
                 }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "activeroute" : undefined
                 }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
