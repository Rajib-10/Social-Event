import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Gallery from "../Pages/Gallery/Gallery";
import Event from "../Pages/Event/Event";
import Details from "../Pages/Details/Details";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/gallery",
                element: <Gallery />
            },
            {
                path: "/event",
                element: <Event />
            },
            {
                path: "/details/:id",
                element: <Details />
            }
        ]
    }
])
    

export default Routes;