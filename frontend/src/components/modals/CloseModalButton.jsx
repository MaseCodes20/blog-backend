import { XIcon } from "@heroicons/react/outline";
import React from "react";

function CloseModalButton({ closeFunction }) {
  return (
    <button className="absolute top-0 right-0 m-5" onClick={closeFunction}>
      <XIcon className="h-[20px] text-gray-400 hover:text-black" />
    </button>
  );
}

export default CloseModalButton;
