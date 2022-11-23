import { EyeIcon } from "@heroicons/react/24/outline";
import React from "react";

function ShowPasswordButton({ showFunction }) {
  return (
    <div
      className="absolute right-0 bottom-0 m-[4px] z-10 cursor-pointer"
      onClick={showFunction}
      aria-label="Show password button"
    >
      <EyeIcon className="h-5 text-gray-400" />
    </div>
  );
}

export default ShowPasswordButton;
