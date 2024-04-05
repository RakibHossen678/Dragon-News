import { useEffect, useState } from "react";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightsideNav from "../Shared/RightsideNav";
import BreakingNews from "./BreakingNews";
import NewsHome from "./NewsHome";

const Home = () => {
  const [categoryId,setCategoryId]=useState('1')
  const getCategoryId=(id)=>{
    setCategoryId(id)
  }
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) =>{
        const newsFilter=data.filter((item=>item.category_id===categoryId))
        console.log(newsFilter)
        setNews(newsFilter)
      });
  }, [categoryId]);
  console.log(news)
  return (
    <div className="">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-4 gap-9 grid-cols-1 ">
        <div className="">
          <LeftSideNav getCategoryId={getCategoryId}></LeftSideNav>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold">Dragon News Home</h2>
          {news.map((sNews) => (
            <NewsHome key={sNews.id} news={sNews}></NewsHome>
          ))}
        </div>
        <div className="text-center lg:text-start">
          <RightsideNav ></RightsideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
