import React from "react";
import AboutSection from "../components/aboutPage/AboutSection";
import NetworkSection from "../components/aboutPage/NetworkSection";

function OurStory() {
  return (
    <div>
      <div className="py-[105px] border-b-[1px] border-black">
        <div className="pageContainer">
          <h1 className="text-[94px] text-center font-semibold">
            Every idea needs a <span className="font-bold">Blog.</span>
          </h1>
        </div>
      </div>

      <AboutSection />

      <NetworkSection />
    </div>
  );
}

export default OurStory;
