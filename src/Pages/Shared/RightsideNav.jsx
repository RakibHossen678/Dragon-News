import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import bg from '../../assets/bg.png'
const RightsideNav = () => {
  return (
    <div>
      <div className="px-3 mb-6">
        <h2 className="text-lg font-semibold">Login With</h2>
        <div className="mt-5 space-y-3 ">
          <button className="btn bg-transparent hover:bg-transparent w-full text-base border border-[#58A7DE] text-[#58A7DE] ">
            <FaGoogle />
            Login with Google
          </button>
          <button className="btn bg-transparent hover:bg-transparent w-full text-base border border-gray-600 text-gray-700 ">
            <FaGithub />
            Login with Google
          </button>
        </div>
      </div>
      <div className="px-3 mb-6">
        <h2 className="text-lg font-semibold">Find Us On</h2>
        <div className="mt-5  border-2 border-gray-300  py-2 rounded-md">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100056015882794"
            className="flex items-center   w-full font-medium border-b border-gray-300  text-gray-700 px-2 py-3 "
          >
            <FaFacebook className="mr-2 text-xl text-[#3B599C]" />
            Facebook
          </a>
          <a
            href="https://twitter.com/RakibHo07525309"
            target="_blank"
            className="flex items-center   w-full font-medium border-b border-gray-300 text-gray-700 px-2 py-3 "
          >
            <FaTwitter className="mr-2 text-xl text-[#58A7DE]" />
            Twitter
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/bhurhan_uddin_rakib/"
            className="flex items-center   w-full font-medium  px-2 py-3 "
          >
            <FaInstagram className="mr-2 text-xl text-[#D82D7E]" />
            Instagram
          </a>
        </div>
      </div>
      <div className="px-3 mb-6 bg-gray-100 py-2">
        <h2 className="text-lg font-semibold">Q-Zone</h2>
        <div className="space-y-4 my-4">
          <div className="border-2 border-gray-300 border-dashed p-3">
            <img src={qZone1} alt="" />
          </div>
          <div className="border-2 border-gray-300 border-dashed p-3">
            <img src={qZone2} alt="" />
          </div>
          <div className="border-2 border-gray-300 border-dashed p-3">
            <img src={qZone3} alt="" />
          </div>
        </div>
      </div>
      <div className="hero mb-4" >
        <img className="w-full" src={bg} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Create an Amazing Newspaper</h1>
            <p className="mb-5 text-white">
            Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
            </p>
            <button className="btn border-none text-white bg-[#D72050]">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightsideNav;
