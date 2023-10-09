import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle} from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {googleLogin,signInUser} = useContext(AuthContext)

    const handleSubmit =(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        
        // user sign in 

        signInUser(email,password)
        .then(()=>{
            toast.success("User Logged in Successfully")
            
            navigate(location?.state ? location.state : "/")
        })
        .catch(error=>{
            toast.error(`${error.message}`)
        })
    }

    const handleGoogleLogIn=()=>{
        googleLogin()
        .then(()=>{
            toast.success("user logged in successfully using google")
            navigate(location?.state ? location.state : "/")
        })
        .catch(error=>{
            toast.error(`${error.message}`)
        })
    }
    return (
        <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email..." name="email" className="input input-bordered w-full" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" name="password" className="input input-bordered w-full" required />
                <label className="label">
                    <span className="label-text-alt link link-hover">Forgot password?</span>
                </label>
                </div>
                <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center">Or Continue With:</p>
            <p  className="text-center cursor-pointer flex items-center justify-center gap-2"><button onClick={handleGoogleLogIn}  className="btn btn-ghost" ><FcGoogle/>Google</button></p>
            <span className="p-4 text-center">Do not have an account?<Link className="font-bold text-blue-700" to="/register">Register</Link></span>
            </div>
        </div>
        <Toaster />
        </div>
    );
};

export default Login;