import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightsideNav from "../Shared/RightsideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4 gap-6 grid-cols-1 ">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2">
                    <h2 className="text-4xl">News comming soon....</h2>
                </div>
                <div className="">
                    <RightsideNav></RightsideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;