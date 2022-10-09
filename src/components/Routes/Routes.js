import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import Errorpage from "../Errorpage/Errorpage";
import Home from "../Home/Home";
import Main from "../Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element : <Main></Main>,
        errorElement : <Errorpage></Errorpage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path:'/about',
                element : <About></About>
            },

            {
                path : '/course',
                element: <Courses></Courses>,
                loader: () => fetch('data.json')
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            }
        ]
    }
])

export default router