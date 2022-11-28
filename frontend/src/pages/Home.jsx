import React from "react";
import { Link } from "react-router-dom";
import AdsSection from "../components/homePage/AdsSection";

function Home() {
  return (
    <div className="pageContainer flex">
      {/* SideBar menu */}
      <div className="h-[calc(100vh-75px)] flex-[2] sticky top-[75px] border-r-[1px] border-black">
        <Link to="/">Home</Link>

        <div>
          <h3>Tags</h3>

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
