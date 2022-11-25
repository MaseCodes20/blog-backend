import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { open } from "../features/connectModal/connectModalSlice";
import { toggleFalse, toggleTrue } from "../features/user/hasAccountSlice";
import { logout } from "../features/auth/authSlice";
import { useEffect } from "react";
import { useState } from "react";

function Header() {
  const [bgColor, setbgColor] = useState("");
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation().pathname;

  const headerColor = location.split("/")[1];

  const listenScrollEvent = (event) => {
    if (window.scrollY > 680) {
      setbgColor("bg-white");
    } else if (window.scrollY < 680) {
      setbgColor(headerColor);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      className={`h-[75px] border-b-[1px] border-black sticky top-0
        ${location === "/" ? "bg-yellow-500" : bgColor || headerColor}`}
    >
      <div className="flex items-center justify-between py-[25px] pageContainer">
        <Link to="/" className="w-161">
          <h1>Logo</h1>
        </Link>
        <div className="flex items-center text-[14px] h-[25px]">
          <Link className="mr-5">Our Story</Link>
          <Link className="mr-5">Membership</Link>
          <Link to="/creators" className="mr-5">
            Write
          </Link>

          {user ? (
            <button onClick={() => dispatch(logout())}>User</button>
          ) : (
            <>
              <button
                className="mr-5"
                onClick={() => {
                  dispatch(open());
                  dispatch(toggleTrue());
                }}
              >
                Sign In
              </button>

              <button
                className="pt-[7px] px-[16px] pb-[9px] bg-black rounded-full text-white font-medium"
                onClick={() => {
                  dispatch(open());
                  dispatch(toggleFalse());
                }}
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
