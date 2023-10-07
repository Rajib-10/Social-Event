import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import Footer from "../Pages/Footer/Footer";


const Root = () => {
    return (
        <div>
        <div style={{ position: 'sticky', top: '0',zIndex:"100" }}>
        <Navbar  />
        </div>
            
            
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;