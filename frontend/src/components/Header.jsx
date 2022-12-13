import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { open } from "../features/modals/connectModalSlice";
import { toggleFalse, toggleTrue } from "../features/user/hasAccountSlice";
import { useEffect } from "react";
import { useState } from "react";
import UserMenu from "./user/UserMenu";
import { TagIcon } from "@heroicons/react/outline";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

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
      <div className="flex items-center justify-between py-[25px]  pageContainer">
        <Link to="/" className="mr-5">
          <h1>devLog(s)</h1>
        </Link>

        <SearchBar />

        <div className="flex items-center text-[14px] h-[25px]">
          {user ? (
            <>
              <Link to="/tags">
                <TagIcon className="h-6 md:h-7 mx-5" />
              </Link>
              <UserMenu />
            </>
          ) : (
            <>
              <MobileMenu />

              <Link to="/about" className="hidden lg:block mr-5 ">
                Our Story
              </Link>

              <Link to="/creators" className="hidden lg:block mr-5">
                Write
              </Link>
              <button
                className="hidden lg:block mr-5"
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
