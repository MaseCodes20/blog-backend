import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdsSection from "../components/homePage/AdsSection";
import PostSection from "../components/homePage/PostSection";

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
      <PostSection />

      {/* Ads */}
      <AdsSection />
    </div>
  );
}

export default Home;
