import { Link } from "react-router-dom";

const BlogInfo=[
    {
        bloggerName:"Mohamad Osman Goni",
        date:"20-02-2021",
        img:"https://my-portfolio-189f2.web.app/static/media/Javascript.d1cb8f73.jpg",
        title:"10 Importance Topic for Javascript Developer",
        description:"JavaScript supports valuable skills such as object-oriented, functional, and imperative styles of programming. Beginner developers"
    },
    {
        bloggerName:"Mohamad Osman Goni",
        date:"20-02-2021",
        img:"https://my-portfolio-189f2.web.app/static/media/react-ui-component-libraries-frameworks.a49fcfc3.jpg",
        title:"Core Concept of React library",
        description:"React is an open-source JavaScript library that helps you build a top interface for both the web as well as mobile apps"
    },
    {
        bloggerName:"Mohamad Osman Goni",
        date:"20-02-2021",
        img:"https://my-portfolio-189f2.web.app/static/media/react-ui-component-libraries-frameworks.a49fcfc3.jpg",
        title:"Javascript Interview Question for Job sicker",
        description:"JavaScript, also abbreviated as JS, is a high-level server-side programming language. JavaScript is widely used worldwide to build various web applications"
    },
]
const Blog = () => {
    return (
        <div className="my-20 md:p-20">
            <h1 className="pb-20 text-center">
          My
          <span className="secondary_color_text"> Blogs</span>
        </h1>
           {
            BlogInfo?.map((blog,index)=><SingleBlog blog={blog} key={index}></SingleBlog>)
           }
           <div className="flex justify-center py-10">
            <button className="btn_outline">
                <Link to={"/project"}>See My Project</Link>
            </button>
           </div>
        </div>
    );
};

export default Blog;

// eslint-disable-next-line react/prop-types
const SingleBlog=({blog})=>{
    // eslint-disable-next-line react/prop-types
    const {bloggerName,date,title,img,description}=blog
    return(
       <div className='grid grid-cols-3 gap-5 p-4 my-4 rounded-md border-2 shadow secondary_color_border'>
         <div className="col-span-2">
            <div className="pb-2">
                <h6>{bloggerName}</h6>
                <p>{date}</p>
            </div>
            <h3 className="py-2 text-3xl secondary_color_text">{title}</h3>
            <p className="text-xl text-justify">{description}</p>
        </div>
        <div className="col-span-1">
            <img className='h-[200px] w-full' src={img}></img>
        </div>
       </div>
    )
}