import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  BookmarkIcon,
  FolderRemoveIcon,
  UserIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";
import { logout } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { openPostModal } from "../../features/modals/postModalSlice";
import { Link } from "react-router-dom";

function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="md:mr-5 flex items-center justify-center">
        <img
          src={
            user.profilePicture ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt={user.name}
          className="w-[30px] h-[30px] mr-[10px] rounded-full object-cover"
        />
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
        <Menu.Items className="absolute right-0 mt-[19px] md:mr-5 w-56 origin-top-right divide-y border-[1px] border-black bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/profile"
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center px-2 py-2 text-sm`}
                >
                  <UserIcon className="h-5 mr-5" /> Profile
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
                  onClick={() => dispatch(openPostModal())}
                >
                  <PencilAltIcon className="h-5 mr-5" /> Write
                </button>
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
                >
                  <BookmarkIcon className="h-5 mr-5" /> Bookmarks
                </button>
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
                  onClick={() => dispatch(logout())}
                >
                  <FolderRemoveIcon className="h-5 mr-5" /> Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserMenu;
