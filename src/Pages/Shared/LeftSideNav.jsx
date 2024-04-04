import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import moment from "moment";
const LeftSideNav = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="">
      <h2 className="text-xl font-semibold">All Category</h2>
      <div className="flex flex-col space-y-3 text-[#9F9F9F] text-lg mt-4 mr-7">
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            className="px-2 hover:bg-[#9F9F9F] hover:text-black py-2 "
            key={category}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="space-y-8 mt-10">
        <div className="  ">
          <img className="mx-auto lg:mx-0" src={img1} alt="" />
          <div className="w-64 mx-auto lg:w-72">
            <h2 className="text-lg font-semibold py-2">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex justify-between pr-12">
              <p>Sport</p>
              <p>{moment().format(" MMM D,YYYY")}</p>
            </div>
          </div>
        </div>
        <div className="  ">
          <img className="mx-auto lg:mx-0" src={img3} alt="" />
          <div className="w-64 mx-auto lg:w-72">
            <h2 className="text-lg font-semibold py-2">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex justify-between pr-12">
              <p>Sport</p>
              <p>{moment().format(" MMM D,YYYY")}</p>
            </div>
          </div>
        </div>
        <div className="  ">
          <img className="mx-auto lg:mx-0" src={img2} alt="" />
          <div className="w-64 mx-auto lg:w-72">
            <h2 className="text-lg font-semibold py-2">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex justify-between pr-12">
              <p>Sport</p>
              <p>{moment().format(" MMM D,YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
