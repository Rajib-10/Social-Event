import { Link } from "react-router-dom";


const Register = () => {
    const handleSubmit =(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log("register is clicked",email,password)
    }
    return (
        <div className="hero h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name..." name="name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Image URL</span>
                </label>
                <input type="text" placeholder="Image URL..." name="image" className="input input-bordered"  />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email..." name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
            <span className="p-4 text-center">Already have an account?<Link className="font-bold text-blue-700" to="/login">Login</Link></span> 
            </div>
        </div>
        </div>
    );
};

export default Register;