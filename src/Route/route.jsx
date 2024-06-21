import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from "../page/Home";
import About from "../page/About";
import ProjectList from "../page/ProjectList";
import Contact from "../page/Contact";
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
                path:"/contact",
                element:<Contact/>
            }
        ]
    },
    {
        path:"/about",
        element:<About/>
    }
])

export default route;