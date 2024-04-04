import { useEffect, useState } from "react";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightsideNav from "../Shared/RightsideNav";
import BreakingNews from "./BreakingNews";
import NewsHome from "./NewsHome";

const Home = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  console.log(news)
  return (
    <div className="">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-4 gap-9 grid-cols-1 ">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold">Dragon News Home</h2>
          {news.map((sNews) => (
            <NewsHome key={sNews.id} news={sNews}></NewsHome>
          ))}
        </div>
        <div className="text-center lg:text-start">
          <RightsideNav></RightsideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
