import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const {userLogIn}=useContext(AuthContext)
  const location=useLocation()
  const Navigate=useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault()
    const form = new FormData (e.currentTarget);
    const email = form.get('email')
    const password=form.get('password')
    userLogIn(email,password)
    .then((result)=>{
      console.log(result.user)
      e.target.reset()
      Navigate(location?.state ? location.state : '/')
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div className="mt-7">
      <Navbar></Navbar>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto bg-white shadow-xl">
        <h1 className="text-2xl font-bold text-center py-6">Login your account</h1>
        <form onSubmit={handleLogin} className="space-y-6 ">
          <div className="space-y-1 text-sm">
            <label  className="block text-lg">
              Email address
            </label>
            <input
            required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-md border-gray-70 focus:border-violet-400 border-2"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block  text-lg ">
              Password
            </label>
            <input
            required
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-md border-gray-300 border-2 focus:border-violet-400"
            />
            <div className="flex justify-end text-xs text-gray-400">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm  bg-violet-400 text-white">
            Login
          </button>
        </form>    
        <p className="text-xs text-center sm:px-6 text-gray-400 font-semibold">
          Don't have an account?
          <Link
          to='/register'
            className="underline text-red-600 "
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
