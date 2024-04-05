import { useContext } from "react";
import Header from "../Shared/Header";
import RightsideNav from "../Shared/RightsideNav";
import { useParams, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NewsDetails = () => {
 
  const data = useLoaderData();
  const { id } = useParams();
  console.log(data);
  const findData = data.find((item) => item._id === id);
  console.log(findData);
  const { author, title, image_url, details, rating, total_view, _id } =
    findData;
  return (
    <div>
      <Header></Header>
      <div className="grid lg:grid-cols-4">
        <div className="col-span-3">
            <h2 className="text-xl font-semibold pl-5">Dragon News</h2>
          <div className="mb-10 mt-6 border-2 mx-6 ">
            
            <h1 className="px-6 py-3 text-xl font-semibold">{title}</h1>
            <div>
              <div className="h-60 mx-auto  mb-4">
                <img
                  className="mb-5 mx-auto w-full  h-full  px-7"
                  src={image_url}
                  alt=""
                />
              </div>
             <p className="px-7 mb-5">{details}</p>
            </div>
            
            
          </div>
        </div>
        <div className="col-span-1">
          <RightsideNav></RightsideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
