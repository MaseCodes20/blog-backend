import React from "react";
import AboutSection from "../components/aboutPage/AboutSection";
import NetworkSection from "../components/aboutPage/NetworkSection";
import Footer from "../components/Footer";

function OurStory() {
  return (
    <div className="relative min-h-[calc(100vh-75px)] ">
      <div className="contentWrapper">
        <div className="py-[105px] border-b-[1px] border-black">
          <div className="xl:mx-auto xl:max-w-6xl mx-2">
            <h1 className="text-[94px] text-center font-semibold">
              Every idea needs a <span className="font-bold">Blog.</span>
            </h1>
          </div>
        </div>

        <AboutSection />

        <NetworkSection />
      </div>
      <Footer />
    </div>
  );
}

export default OurStory;
