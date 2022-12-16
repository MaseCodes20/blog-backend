import React from "react";
import { Dna } from "react-loader-spinner";

function ServerSpinner() {
  return (
    <div className="fixed flex top-0 left-0 right-0 bottom-0 items-center justify-center h-screen bg-white/95 z-20">
      <div className="w-[160px] flex flex-col items-center">
        <Dna
          visible={true}
          height="150"
          width="150"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        <p className="text-center">
          Server is warming up! hosted on{" "}
          <span className="text-blue-600">
            <a href="https://render.com/" target="_blank">
              render
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default ServerSpinner;
