import { Link, NavLink } from "react-router-dom";
import userProfile from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogOut=()=>{
    logOut()
    .then(result=>{
      console.log('Sign-out successful',result.user)
    })
    .catch((error)=>{
      console.log('An error happened',error)
    })
  }
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 , font-semibold" : "font-semibold"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li >
        <NavLink className={({ isActive }) =>
            isActive ? "text-red-500 , font-semibold" : "font-semibold"
          } to="/about">About</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
            isActive ? "text-red-500 , font-semibold" : "font-semibold"
          } to="/career">Career</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
            isActive ? "text-red-500 , font-semibold" : "font-semibold"
          } to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
            isActive ? "text-red-500 , font-semibold" : "font-semibold"
          } to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mb-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal space-x-9 px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <div role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={userProfile}
            />
          </div>
        </div>
        {
          user ?
           <button onClick={handleLogOut} className="btn px-6 bg-gray-600 text-white">Log Out</button> : 
           <Link to='/login'>
          <button className="btn px-6 bg-gray-600 text-white">Login</button>
        </Link>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
