import { Link } from "react-router-dom";
import profile_image from "../assets/osman_avatar.png";
import Intro from "../Componant/About/Intro";
import Skill from "../Componant/About/Skill";
import ExperianceAndAchiv from "../Componant/About/ExperianceAndAchiv";
import Education from "../Componant/About/Education";

const About = () => {
  const scrollToSection=(sectionId)=>{
    const section = document.getElementById(sectionId);
    console.log(section)
    section?.scrollIntoView({ behavior: 'smooth' });
}
  return (
    <div className="primary_color_bg">
      <div className="flex  gap-10 ">
        <div
          className=" text-white min-h-screen 
      font-mono  bg-[#0f0f1a] rounded w-[400px]"
        >
          <div className="flex border-b-2 p-3 py-5 flex-col justify-center items-center text-xl">
            <figure>
              <img
                className="h-[120px] w-[120px] rounded-full border-4  border-dotted
            avatar drop-shadow-lg  border-gray-400 shadow-2xl"
                src={profile_image}
              />
            </figure>
            <h6 className="uppercase ">Mohammad Osman Goni</h6>
          </div>

          <ul className="">
            <li
              className="flex gap-4 items-center text-xl font-bold w-full  rounded 
              shadow-md p-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <div>
                <h6>E-mail</h6>
                <p>osmangoni0827@gmail.com</p>
              </div>
            </li>
            <li
              className="flex gap-4 items-center text-xl font-bold w-full  rounded 
              shadow-md p-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>

              <div>
                <h6>Phone</h6>
                <p>+880160776224</p>
              </div>
            </li>
            <li
              className="flex gap-4 items-center text-xl font-bold w-full  rounded 
              shadow-md p-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>

              <div>
                <h6>Birth Day</h6>
                <p>29-03-2002</p>
              </div>
            </li>
            <li
              className="flex gap-4 items-center text-xl font-bold w-full  rounded 
             shadow-md p-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <div>
                <h6>Location</h6>
                <p>Feni, Chittagong-Bangladesh</p>
              </div>
            </li>
          </ul>
        </div>

        <div className=" bg-[#202029] w-full p-4 max-h-screen overflow-y-auto">
          <div className="flex justify-center w-full">
            <div className=" w-full hidden  text-2xl lg:flex ">
              <div className="flex gap-5 justify-between items-center w-full ">
                <ul className="text-center text-3xl font-thin flex justify-between items-center">
                  <li className="pr-10">
                    <Link to={'/'}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="size-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>About Me</li>
                </ul>

                <ul className="flex shadow-lg menu  menu-horizontal text-2xl  justify-center gap-5">
                  <li>
                    <Link onClick={()=>scrollToSection('my_skill')}>My Skill</Link>
                  </li>

                  <li>
                    <Link onClick={()=>scrollToSection('experience_achieve')}>
                    Experience & Achievements</Link>
                  </li>
                  <li>
                    <Link onClick={()=>scrollToSection('education')}>Education</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-4">
            <Intro />
            <Skill />
            <ExperianceAndAchiv />
            <Education />
          </div>
          <div className="flex justify-center">
            <button className="btn_outline my-5">
              <Link to={"/project"}>See Project</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
