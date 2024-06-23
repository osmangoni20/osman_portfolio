import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";
import github from "../assets/github.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear[0];
  console.log(year);
  return (
    <div>
      <footer className="footer mt-20 md:text-center items-center p-4 shadow-lg shadow-white primary_color_bg text-neutral-content">
        <div className="w-full flex justify-center">
        <div className="lg:items-center text-center lg:flex lg:justify-between w-full">
          <p className="text-xl text-center">
            Copyright © {year || 2024} - All right reserved Mohamad Osman Goni
          </p>
          <ul className="flex justify-center items-center gap-3">
            <li className="border-2 h-[50px] mt-2 w-[50px]  bg-white  border-[#F57F03] rounded-full p-2">
              <Link target="_blank" to={"https://wa.link/nas487"}>
                <img src={whatsapp} />
              </Link>
            </li>
            <li className="border-2 h-[50px] mt-2 w-[50px]  bg-white   border-[#F57F03] rounded-full p-2">
              <Link target="_blank" to={"https://www.linkedin.com/in/osman84/"}>
                <img src={linkedin} />
              </Link>
            </li>
            <li
              className="border-2 h-[50px] mt-2 w-[50px] 
                             bg-white border-[#F57F03]
                              rounded-full p-2"
            >
              <Link target="_blank" to={"https://github.com/osmangoni20"}>
                <img src={github} />
              </Link>
            </li>
            <li className="border-2 h-[50px] mt-2 w-[50px]  bg-white border-[#F57F03] rounded-full p-2">
              <Link target="_blank" to={"https://x.com/osmangoni0827"}>
                <img src={twitter} />
              </Link>
            </li>
            <li className="border-2 h-[50px] mt-2 w-[50px]  bg-white border-[#F57F03] rounded-full p-2">
              <Link target="_blank" to={"https://www.instagram.com/"}>
                <img src={instagram} />
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
