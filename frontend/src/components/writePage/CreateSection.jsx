import React from "react";
import StartWritingButton from "./StartWritingButton";

function CreateSection() {
  return (
    <section className="bg-white">
      <div className="pageContainer text-center">
        <div className="p-10">
          <h1 className="uppercase mt-14 font-bold text-[18px] lg:text-[100px] tracking-[0.75em]">
            Create your space
          </h1>

          <div>
            <p>We all have a story to tell, what is yours?</p>

            <StartWritingButton buttonColors={`creatorsButtonCreate`} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateSection;
