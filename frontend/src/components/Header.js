import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-yellow-400 h-[75px]">
      <div className="flex items-center justify-between mx-20 py-[25px]">
        <div className="w-161">
          <h1>Logo</h1>
        </div>
        <div className="flex items-center text-[14px] h-[25px]">
          <Link className="mr-5">Our Story</Link>
          <Link className="mr-5">Membership</Link>
          <Link className="mr-5">Write</Link>
          <button className="mr-5">Sign In</button>

          <button className="pt-[7px] px-[16px] pb-[9px] bg-black rounded-full text-white font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
