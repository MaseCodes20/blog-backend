import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { open } from "../features/modals/connectModalSlice";
import { toggleFalse, toggleTrue } from "../features/user/hasAccountSlice";

function MobileMenu() {
  const dispatch = useDispatch();

  return (
    <Menu as="div" className="relative lg:hidden">
      <Menu.Button className=" flex items-center justify-center">
        <DotsVerticalIcon className="h-5" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-[19px]  w-[120px] origin-top-right divide-y border-[1px] border-black bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/about"
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center px-2 py-2 text-sm`}
                >
                  Our Story
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/creators"
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center px-2 py-2 text-sm`}
                >
                  Write
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center px-2 py-2 text-sm`}
                  onClick={() => {
                    dispatch(open());
                    dispatch(toggleTrue());
                  }}
                >
                  Sign In
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  to="/following"
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center px-2 py-2 text-sm`}
                  onClick={() => {
                    dispatch(open());
                    dispatch(toggleFalse());
                  }}
                >
                  Get Started
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MobileMenu;
