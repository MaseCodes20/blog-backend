import React from "react";
import { useDispatch } from "react-redux";
import { open } from "../../features/modals/connectModalSlice";
import { toggleFalse } from "../../features/user/hasAccountSlice";

function StartWritingButton({ buttonColors }) {
  const dispatch = useDispatch();

  return (
    <button
      className={`pt-[9px] px-[32px] pb-[10px] mt-10 rounded-[21px] text-[18px] ${buttonColors}`}
      onClick={() => {
        dispatch(open());
        dispatch(toggleFalse());
      }}
    >
      Start writing
    </button>
  );
}

export default StartWritingButton;
