import planifyImage from "./src/assets/project_image/Planify.jpg";
import FationShoeImage from "./src/assets/project_image/fationShoe.jpg";
import medstarImage from './src/assets/project_image/medstar.jpg'

export  const ProjectDetails = [
    {
      id:"1",
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
      features:[
        "Authentication & Authorization",
        "Manage Services & Filtering Services",
        "Profile Management & Client Booking Management",
       " Schedule Management , Booking Realtime Tracking and Management",
        "Verified Client Review with Ratings, Comments"
      ],
      role:["user","admin"],
      project_details:"Fation Shoe is a e-commerce website. You can order shoe from this website"
    },
    {
      id:"2",
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
      features:[
        "Authentication & Authorization",
        "Manage Tasks & Filtering Tasks",
        "Profile Management & User Tasks Management",
        "Verified Client Review with Ratings, Comments"
      ],
      role:["user","admin"],
      project_details:"Planify is a task management website. You can create new task in this website"

    },
    {
      id:"3",
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
      features:[
        "Authentication & Authorization",
        "Manage Services & Filtering Services",
        "Profile Management & Client Booking Management",
       " Schedule Management , Booking Realtime Tracking and Management",
        "Verified Client Review with Ratings, Comments"
      ],
      role:["user","admin"],
      project_details:"Med Star is a e-commerce and Management website. You can order shoe from this website"

    },
  ];