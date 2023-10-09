import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";



const Register = () => {
    const navigate = useNavigate()
    const {createUser, updateUserProfile,userLogOut} = useContext(AuthContext)
    const handleSubmit =(e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value
        
        // creating user 
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            return toast.error("Invalid Email.")
        }
        if(password.length <6){
            return toast.error("password is less than 6 characters")
        }
        if(!/[A-Z]/.test(password)){
            return toast.error("password  don't have a capital letter")
        }
        if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            return toast.error("password  don't have a special character")
        }
        
        createUser(email,password)
        .then(()=>{
           
            updateUserProfile(name,photo)
            .then(()=>{
                toast.success("User created Successfully")
                userLogOut()
                navigate('/login')
            })
            .catch()

        })
        .catch(error=>{
            toast.error(`${error.message}`)
        })
    }
    return (
        <div className="hero w-full bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name..." name="name" className="input input-bordered w-full" required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Image URL</span>
                </label>
                <input type="text" placeholder="Image URL..." name="image" className="input input-bordered w-full"  />
                </div>

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
                </div>
                <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
            <span className="p-4 text-center">Already have an account?<Link className="font-bold text-blue-700" to="/login">Login</Link></span> 
            </div>
        </div>
        <Toaster />
        </div>
    );
};

export default Register;