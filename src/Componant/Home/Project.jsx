import SingleProjectCart from "../SingleProjectCart";
import planifyImage from "../../assets/project_image/Planify.jpg";
import FationShoeImage from "../../assets/project_image/fationShoe.jpg";
import medstarImage from '../../assets/project_image/medstar.jpg'
import { Link } from "react-router-dom";
const ProjectDetails = [
  {
    project_name: "Fation Shoe",
    type: "E-commerce",
    stack: "Full Stack",
    live_site:"https://fationshoes.onrender.com/",
    client_site:"https://github.com/osmangoni20/Fation-Shoes-client",
    server_site:"https://github.com/osmangoni20/Fation-Shoes-backend",
    project_img: FationShoeImage,
    font_tech: ["Javascript", "React js", "TaileindCss","Firebase"],
    backend_tech: ["Node Js", "Express Js"],
    db_tech: ["MongoDB"],
  },
  {
    project_name: "Planify",
    type: "Task Management",
    stack: "Full Stack",
    live_site:"https://planify-fontend.onrender.com/",
    client_site:"https://github.com/osmangoni20/Planify_Fontend",
    server_site:"https://github.com/osmangoni20/Planify_Backend",
    project_img: planifyImage,
    font_tech: ["Javascript", "React js", "TaileindCss", "React DND","Firebase"],
    backend_tech: ["Node Js", "Express Js"],
    db_tech: ["MongoDB"],
  },
  {
    project_name: "Med Star",
    type: "Management & E-commerce",
    stack: "Full Stack",
    live_site:"https://med-star.vercel.app/",
    client_site:"https://github.com/osmangoni20/Med-Star",
    server_site:"https://github.com/osmangoni20/MedStar-Backend",
    project_img: medstarImage,
    font_tech: ["Javascript", "Next js", "TaileindCss", "Firebase"],
    backend_tech: ["Node Js", "Express Js"],
    db_tech: ["MongoDB"],
  },
];

const Project = () => {
  return (
    <div className="py-20 flex justify-center">
      <div>
        <h1 className="pb-5 text-center">
          My
          <span className="secondary_color_text"> Projects</span>
        </h1>
        <div className="ml-5">
          {ProjectDetails?.map((item, index) => (
            <SingleProjectCart key={index} singleProjectData={item} />
          ))}
        </div>
        <div className="flex justify-end">
          <button className="btn_outline my-5 flex">
            <Link to={""}>More Project </Link>
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
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
