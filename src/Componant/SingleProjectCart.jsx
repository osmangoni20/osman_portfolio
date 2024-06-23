/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProjectCart = ({singleProjectData}) => {
        const {project_name, id, live_site,server_site,client_site, type, stack ,project_img, font_tech, backend_tech, db_tech}=singleProjectData
    console.log(id)
        return (
    <div className="border-2 my-10 secondary_color_border rounded md:mx-6 shadow-md shadow-gray-600 p-5">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-10 lg:items-center">
        <div>
           
          <h3 className="text-xl md:text-3xl">
            Project Name: 
            <span className="secondary_color_text"> {project_name} </span>
            <span className="text-[10px] hidden md:block">{stack}</span>
          </h3>
          <ul className=" flex flex-wrap gap-2 text-sm md:text-md items-center">
            <li >
             <Link className="flex flex-wrap my-0 py-0" to={live_site}>
             Live Site
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg></Link>
            </li>
            <li>
                <Link className="flex my-0 py-0" to={client_site}>
                Client Site 

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
                </Link>
              
            </li>
            <li >
                <Link className="flex my-0 py-0" to={server_site}>
                Server Site 
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
                </Link>
               
            </li>
           
          </ul>
          <h5 className="text-md md:text-xl py-2">Project Type: {type}</h5>
          <div className="py-5">
            <h3>Technologies</h3>
            
           <div className="lg:flex gap-2 items-center pt-5 md:pt-10">
           <h6>Frontend-</h6>
            <ul className="flex flex-wrap gap-2 lg:gap-5">
           {font_tech.map((item,index)=><li  className="rounded-lg  px-2 text-sm secondary_color_bg text-white" key={index}>{item}</li>)}
            
            </ul>
           
           </div>
           <div className="lg:flex gap-2 items-center">
           <h6>Backend-</h6>
            <ul className="flex flex-wrap gap-2 lg:gap-5">
           {backend_tech.map((item,index)=><li  className="rounded-lg px-2 text-sm secondary_color_bg text-white" key={index}>{item}</li>)}

            </ul>
           </div>
          <div className="lg:flex gap-2 items-center">
          <h6>Database-</h6>
            <ul className="flex gap-5">
           {db_tech.map((item,index)=><li className="rounded-lg px-2 text-sm secondary_color_bg text-white" key={index} >{item}</li>)}
            </ul>
          </div>
          </div>
          <div  className="flex justify-center">
          <button className="btn_outline">
     <Link to={`/project_details/${id}`}>More Details</Link>
      </button>
          </div>
        </div>
        <div>
          <figure>
            <img className=" lg:h-[350px] lg:w-[600px] h-[200px] w-[350px] rounded" 
            src={project_img}/>
          </figure>
        </div>
      </div>
     
    </div>
  );
};

export default SingleProjectCart;
