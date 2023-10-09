import { Link } from "react-router-dom";
import error from "../../../src/assets/404.jpg"

const Error = () => {
    return (
        <div className=" flex justify-center items-center h-screen">
            <div className="space-y-4 text-center">
            <img className="w-[70vh]" src={error} alt="" />
            <Link to="/" className="btn btn-primary ">Go Home</Link>
            </div>
            
        </div>
    );
};

export default Error;