import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/assets/logo2.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const Navbar = () => {
  const {user,userLogOut} = useContext(AuthContext)
  const handleLogOut=()=>{
    userLogOut()
    .then(result=>{
      toast.success("Log Out Successfully")
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
    const navLinks = <>
    <li><NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline " : ""
        }
        >
        Home
        </NavLink></li>

        <li><NavLink
        to="/about"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline " : ""
        }
        >
        About Us
        </NavLink></li>

        <li><NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline " : ""
        }
        >
        Contact Us
        </NavLink></li>

        {
          user && <>
          <li><NavLink
        to="/gallery"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline " : ""
        }
        >
        Gallery
        </NavLink></li>

        <li><NavLink
        to="/event"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline " : ""
        }
        >
        Events
        </NavLink></li>

          </>
        }

    </>
    return (
        <div className="navbar bg-base-100 ">
  <div className="navbar-start" >
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
        
      </ul>
    </div>
    
   <Link to="/"><img className="w-[200px]" src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {navLinks}
      
    </ul>
  </div>
  <div className="navbar-end">
  {
    user ? <>
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} />
        </div>
      </label>
      <span className="hidden md:block">{user.displayName}</span>
      <button onClick={handleLogOut} className="btn btn-sm btn-ghost">log Out</button>
    </> :
    <Link to="/login" className="btn btn-sm btn-neutral">Login</Link>

  }
    
  </div>
  <Toaster />
</div>
    );
};

export default Navbar;