import PropTypes from "prop-types";
import { useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";

const NewsHome = ({ news }) => {
  const [Slice,setslice]=useState(405)
  const [hidden,setHidden]=useState(false)
  const handleReadMore=()=>{
    setHidden(!hidden)
    setslice(details.length)

  }
  const { author, title, thumbnail_url, details } = news;
  return (
    <div className="mb-10 mt-6 border-2 mx-6 ">
      <div className="flex justify-between items-center  bg-gray-200 px-3 py-2 ">
        <div className="flex items-center space-x-4">
          <img className="w-12 rounded-full" src={author.img} alt="" />
          <div className="space-y-1">
            <p className="font-medium">{author.name}</p>
            <p className="text-sm">{author.published_date}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <CiBookmark className="text-xl"></CiBookmark>
          <CiShare2 className="text-xl"></CiShare2>
        </div>
      </div>
      <h1 className="px-6 py-3 text-xl font-semibold">{title}</h1>
      <div>
        <div className="h-60 mx-auto w-[470px] mb-4">
          <img
            className="mb-5 mx-auto w-full  h-full  px-7"
            src={thumbnail_url}
            alt=""
          />
        </div>
        <p className="px-7 mb-1">{details.slice(0, Slice)}{hidden || <span>...........</span>}</p>
        
        <p className={hidden ? 'hidden cursor-pointer' : 'cursor-pointer px-7 text-orange-500 mb-3'} onClick={handleReadMore}>Read more</p>
      </div>
    </div>
  );
};
NewsHome.propTypes = {
  news: PropTypes.object,
};

export default NewsHome;
