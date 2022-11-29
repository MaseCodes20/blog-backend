import React from "react";
import { Link } from "react-router-dom";
import AdsSection from "../components/homePage/AdsSection";

function Home() {
  return (
    <div className="pageContainer md:flex">
      {/* SideBar menu */}
      <div className="md:h-[calc(100vh-75px)] flex md:flex-col items-center justify-between md:justify-start md:flex-[2] sticky top-[75px] border-b-[1px] md:border-r-[1px] bg-white border-black">
        <Link to="/">Home</Link>

        <div>
          <h3 className="hidden md:flex">Tags</h3>

          <button>Javascript</button>
        </div>

        <button>popular</button>
      </div>

      {/* Posts */}
      <div className="bg-green-400 h-screen p-5 flex-[6]">Feed</div>

      {/* Ads */}
      <AdsSection />
    </div>
  );
}

export default Home;
