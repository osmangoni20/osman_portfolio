import { ProjectDetails } from "../../Data";
import SingleProjectCart from "../Componant/SingleProjectCart";


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
