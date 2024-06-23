import { Link, useParams } from "react-router-dom";
import { ProjectDetails } from "../../Data";

const SingleProjectDetails = () => {
    const {id}=useParams()
    const singleProjectData=ProjectDetails.find(data=>data?.id===id)
    console.log(singleProjectData)
    const {project_name,features, project_details,role, live_site,server_site,client_site, type, stack 
      ,project_img, font_tech, backend_tech, db_tech}=singleProjectData
    return (
    <div className=" my-20 py-10 mx-6  p-5">

      <h1 className="pb-20 text-center">Project <span className="secondary_color_text">Details</span></h1>
      <div className="flex justify-between gap-10">
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
           {font_tech?.map((item,index)=><li  className="rounded-lg  px-2 text-sm secondary_color_bg text-white" key={index}>{item}</li>)}
            
            </ul>
           
           </div>
           <div className="flex gap-2 items-center">
           <h6>Backend-</h6>
            <ul className="flex gap-5">
           {backend_tech?.map((item,index)=><li  className="rounded-lg px-2 text-sm secondary_color_bg text-white" key={index}>{item}</li>)}

            </ul>
           </div>
          <div className="flex gap-2 items-center">
          <h6>Database-</h6>
            <ul className="flex gap-5">
           {db_tech?.map((item,index)=><li className="rounded-lg px-2 text-sm secondary_color_bg text-white" key={index} >{item}</li>)}
            </ul>
          </div>
          </div>
          <div className=" py-2">
            <h3>Project Details:</h3>
            <p className="text-lg">{project_details}</p>
          </div>
          <div className="flex gap-2 items-center py-2">
           <h3>Role:</h3>
           {role?.map((data ,index)=><p  className="rounded-lg px-3 bg-purple-500 text-lg  text-white" key={index}>{data}</p>)}
          </div>
          <div className="py-2">
            <h3>Features</h3>
            <ul>
             {
             features?.map((feature,index)=>(
              <li key={index} className="flex gap-1 py-2 text-justify">
              <span>
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
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
              </span>
              <span>
             {feature}
              </span>
            </li>
             ))
             }
            </ul>
          </div>
        </div>
        <div>
          <figure>
            <img className=" h-[300px]  rounded" 
            src={project_img}/>
          </figure>
        </div>
      </div>
             <div className="flex justify-center">
             <Link to={"/project"}>
              <button className="btn_outline flex gap-1">
               
               <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" 
  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                </span>
                  Go Back
              
              </button>
              </Link>
             </div>
    </div>
  );
};

export default SingleProjectDetails;