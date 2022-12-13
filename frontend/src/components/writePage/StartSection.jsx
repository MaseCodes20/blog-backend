import React from "react";
import StartWritingButton from "./StartWritingButton";
import { Triangle } from "react-loader-spinner";

function StartSection() {
  return (
    <section className="bg-[#F24D2E]">
      <div className="lg:flex pageContainer">
        <div className="flex-[6] p-10 lg:border-r-[1px] border-black">
          <h1 className="uppercase mt-14 text-white font-bold text-[11px] tracking-[0.75em]">
            start a blog for free
          </h1>

          <p className="text-[100px] mb-8 font-semibold leading-none">
            Pubish, grow, and earn, all in one place.
          </p>

          <p className="max-w-[525px]">
            If you have a story to tell, knowledge to share, or a perspective to
            offer --- welcome home. Sign up for free so your writing cans thrive
            in a network supported by millions of readers --- not ads
          </p>

          <StartWritingButton buttonColors={`creatorsButtonStart`} />
        </div>
        <div className="flex-[2] w-full p-10">
          <div className="flex items-center justify-center h-full">
            <Triangle
              height="200"
              width="200"
              color="#000000"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartSection;
