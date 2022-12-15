import React from "react";
import Footer from "../components/Footer";
import CreateSection from "../components/writePage/CreateSection";
import JoinSection from "../components/writePage/JoinSection";
import StartSection from "../components/writePage/StartSection";

function Creators() {
  return (
    <div className="relative min-h-[calc(100vh-75px)]">
      <div className="contentWrapper">
        <StartSection />

        <JoinSection />

        <CreateSection />
      </div>

      <Footer />
    </div>
  );
}

export default Creators;
