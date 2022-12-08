import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { open } from "../features/modals/connectModalSlice";
import { toggleFalse, toggleTrue } from "../features/user/hasAccountSlice";
import { useEffect } from "react";
import { useState } from "react";
import UserMenu from "./user/UserMenu";
import { SearchIcon } from "@heroicons/react/solid";
import { TagIcon } from "@heroicons/react/outline";

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
      setbgColor("");
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
      className={`h-[75px] border-b-[1px] border-black sticky top-0 z-10
        ${bgColor ? bgColor : headerColor || "bg-white"}`}
    >
      <div className="flex items-center justify-between py-[25px] pageContainer">
        <Link to="/">
          <h1>devLog(s)</h1>
        </Link>

        <div className="relative h-[30px]">
          <div className="absolute left-0 ml-2 h-full flex items-center">
            <SearchIcon className="h-4" />
          </div>

          <input
            type="text"
            name="search"
            id=""
            className="md:w-[600px] h-[30px] pl-8 w-full border-[1px] rounded-full  border-gray-500 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black pb-[2px]"
            placeholder="search..."
          />
        </div>

        <div className="flex items-center text-[14px] h-[25px]">
          {user ? (
            <>
              <Link to="/tags">
                <TagIcon className="h-7 mr-5" />
              </Link>
              <UserMenu />
            </>
          ) : (
            <>
              <Link to="/about" className="mr-5">
                Our Story
              </Link>

              <Link className="mr-5">Membership</Link>

              <Link to="/creators" className="mr-5">
                Write
              </Link>
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
                className="signInSignOutButton"
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
