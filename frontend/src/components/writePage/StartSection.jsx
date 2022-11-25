import React from "react";
import { useDispatch } from "react-redux";
import { open } from "../../features/connectModal/connectModalSlice";
import { toggleFalse } from "../../features/user/hasAccountSlice";
import StartWritingButton from "./StartWritingButton";

function StartSection() {
  const dispatch = useDispatch();
  return (
    <section className="bg-[#F24D2E]">
      <div className="flex pageContainer">
        <div className="flex-[6] p-10 border-r-[1px] border-black">
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
        <div className="flex-[2] p-10">image</div>
      </div>
    </section>
  );
}

export default StartSection;
