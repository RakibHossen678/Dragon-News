import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Register = () => {
    const handleRegister=(e)=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name=form.get('name')
        const photo=form.get('photo')
        const email=form.get('email')
        const password=form.get('password')
        const checked=e.target.checkbox.checked
        console.log(name,photo,email,password,checked)
      }
    return (
        <div className="mt-7">
      <Navbar></Navbar>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto bg-white shadow-xl">
        <h1 className="text-2xl font-bold text-center py-6">Login your account</h1>
        <form onSubmit={handleRegister} className="space-y-6 ">
          <div className="space-y-1 text-sm">
            <label  className="block text-lg">
              Your Name
            </label>
            <input
            
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md border-gray-70 bg-gray-100 focus:border-violet-400 border-2"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label  className="block text-lg">
              Photo URL
            </label>
            <input
            
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter your Photo URL"
              className="w-full px-4 py-3 rounded-md border-gray-70 bg-gray-100  focus:border-violet-400 border-2"
            />
          </div>
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
              className="w-full px-4 py-3 rounded-md border-gray-70 bg-gray-100  focus:border-violet-400 border-2"
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
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-100  border-2 focus:border-violet-400"
            />
            <div className="flex justify-end text-xs text-gray-400">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="flex space-x-2 items-center">
            <input type="checkbox" name="checkbox" className=""  />
            <p>Accept Term & Conditions</p>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm  bg-violet-400 text-white">
            Register
          </button>
        </form>    
        <p className="text-xs text-center sm:px-6 text-gray-400 font-semibold">
          Already have an account?
          <Link
          to='/login'
            className="underline text-red-600 "
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Register;