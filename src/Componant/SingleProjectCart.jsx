/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProjectCart = ({singleProjectData}) => {
        const {project_name, live_site,server_site,client_site, type, stack ,project_img, font_tech, backend_tech, db_tech}=singleProjectData
    return (
    <div className="border-2 my-10 secondary_color_border rounded mx-6 shadow-md shadow-gray-600 p-5">
      <div className="flex justify-between gap-10 items-center">
        <div>
           
          <h2>
            Project Name: 
            <span className="secondary_color_text"> {project_name} </span>
            <span className="text-[10px]">{stack}</span>
          </h2>
          <ul className=" flex gap-2 text-md items-center">
            <li >
             <Link className="flex my-0 py-0" to={live_site}>
             Live
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
                Client Site Code

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
                Server Site Code
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
          <h2 className="text-xl py-2">Project Type: {type}</h2>
          <div className="py-5">
            <h3>Technologies</h3>
            
           <div className="flex gap-2 items-center">
           <h6>Frontend-</h6>
            <ul className="flex flex-wrap gap-5">
           {font_tech.map((item,index)=><li  className="rounded-lg  px-2 text-sm secondary_color_bg text-white" key={index}>{item}</li>)}
            
            </ul>
           
           </div>
           <div className="flex gap-2 items-center">
           <h6>Backend-</h6>
            <ul className="flex gap-5">
           {backend_tech.map((item,index)=><li  className="rounded-lg px-2 text-sm secondary_color_bg text-white" key={index}>{item}</li>)}

            </ul>
           </div>
          <div className="flex gap-2 items-center">
          <h6>Database-</h6>
            <ul className="flex gap-5">
           {db_tech.map((item,index)=><li className="rounded-lg px-2 text-sm secondary_color_bg text-white" key={index} >{item}</li>)}
            </ul>
          </div>
          </div>
          <button className="btn_outline">
     <Link to={"/"}>More Details</Link>
      </button>
        </div>
        <div>
          <figure>
            <img className=" h-[350px] w-[600px] rounded" 
            src={project_img}/>
          </figure>
        </div>
      </div>
     
    </div>
  );
};

export default SingleProjectCart;
