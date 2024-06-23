import { ProjectDetails } from "../../../Data";
import SingleProjectCart from "../SingleProjectCart";

import { Link } from "react-router-dom";


const Project = () => {
  return (
    <div className="md:py-20 flex justify-center">
      <div>
        <h2 className="md:text-5xl text-4xl pb-5 text-center">
          My
          <span className="secondary_color_text"> Projects</span>
        </h2>
        <div className="md:ml-5">
          {ProjectDetails?.map((item, index) => (
            <SingleProjectCart key={index} singleProjectData={item} />
          ))}
        </div>
        <div className="flex justify-end">
          <button className="btn_outline my-5 flex m-4">
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
