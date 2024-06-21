import { Link } from "react-router-dom";

const Navbar = () => {
   const scrollToSection=(sectionId)=>{
      
      const section = document.getElementById(sectionId);
      console.log(section)
      section?.scrollIntoView({ behavior: 'smooth' });
  }
    return (
        <div>
<div className="navbar z-10 primary_color_bg fixed top-0 shadow-sm shadow-white">
  <div className="navbar-start text-2xl">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <h1>Mohammad Osman Goni</h1>
      </div>
      <ul  className="text-2xl menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box ">
     <li >
        <Link to={"/"}>
        Home
        </Link>
     </li>
     <li>
        <Link to={"/about"}>
        About
        </Link>
     </li>
     <li>
        <Link to={"/service"}>
        Service
        </Link>
     </li>
     <li>
        <Link to={"/project"}>
        Project
        </Link>
     </li>
     <li>
        <Link to={"/contact"}>
        Contact
        </Link>
     </li>
    </ul>
    </div>
    <h1 className="btn btn-ghost text-2xl">Mohamad Osman Goni</h1>
  </div>
  <div className="navbar-end hidden text-2xl lg:flex">
    <ul className="menu-horizontal menu menu:active:secondary_color_text gap-5  px-1 text-2xl">
     <li>
        <Link  to={"/"}>
        Home
        </Link>
     </li>
     <li>
        <Link to={"/about"}>
        About
        </Link>
     </li>
     <li onClick={()=>scrollToSection('section1')}>
       
        <Link>
        Service
        </Link>
        
     </li>
     <li>
        <Link to={"/project"}>
        Project
        </Link>
     </li>
     <li>
        <Link to={"/contact"}>
        Contact
        </Link>
     </li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;