import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="bg-gray-300 flex px-2 py-2 rounded-xl my-5">
      <button className="bg-red-600 text-white  px-6 text-lg rounded-lg py-2">
        Latest
      </button>
      <Marquee pauseOnHover={true}>
        <Link to='/' className="mr-12">
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
        </Link>
        <Link to='/' lassName="mr-12">
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
        </Link>
        <Link to='/' lassName="mr-12">
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
