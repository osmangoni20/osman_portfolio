import SingleProjectCart from "../Componant/SingleProjectCart";
import planifyImage from "../assets/project_image/Planify.jpg";
import FationShoeImage from "../assets/project_image/fationShoe.jpg";
import medstarImage from '../assets/project_image/medstar.jpg'
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

const ProjectList = () => {
  return (
    <div className="my-20 flex justify-center">
      <div>
        <h1 className="pb-5 text-center py-20">
          My
          <span className="secondary_color_text"> Projects</span>
        </h1>
        <div>
          {ProjectDetails?.map((item, index) => (
            <SingleProjectCart key={index} singleProjectData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
