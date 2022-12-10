import React from "react";
import PostSection from "../components/homePage/PostSection";
import SideBar from "../components/homePage/Sidebar";

function Home() {
  return (
    <div className="pageContainer md:flex">
      {/* Ads */}
      {/* <AdsSection /> */}

      {/* Posts */}
      <PostSection />

      {/* SideBar menu */}
      <SideBar />
    </div>
  );
}

export default Home;
