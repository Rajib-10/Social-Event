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
import PrivateRouter from "./PrivateRouter";


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
                element: <PrivateRouter><Gallery /></PrivateRouter>
            },
            {
                path: "/event",
                element: <PrivateRouter><Event /></PrivateRouter>
            },
            {
                path: "/details/:id",
                element: <PrivateRouter><Details /></PrivateRouter>
            }
        ]
    }
])
    

export default Routes;