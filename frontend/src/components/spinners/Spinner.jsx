import React from "react";
import { Dna } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="fixed flex top-0 left-0 right-0 bottom-0 items-center justify-center h-screen bg-white/95 z-20">
      <Dna
        visible={true}
        height="150"
        width="150"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}

export default Spinner;
