import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from "../page/Home";
import About from "../page/About";
import ProjectList from "../page/ProjectList";
import Contact from "../page/Contact";
import Blog from "../page/Blog";
import SingleProjectDetails from "../page/SingleProjectDetails";
const route =createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/project",
                element:<ProjectList/>
            },
            {
                path:"/project_details/:id",
                element:<SingleProjectDetails/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },{
                path:"/blog",
                element:<Blog/>
            }
        ]
    },
    {
        path:"/about",
        element:<About/>
    }
])

export default route;