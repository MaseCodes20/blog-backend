import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  BookmarkIcon,
  PencilAltIcon,
  TrashIcon,
  DotsVerticalIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";

function PostMenu({ author }) {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  return (
    <Menu as="div" className="relative">
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
        <Menu.Items className="absolute right-0 mt-[19px]  w-56 origin-top-right divide-y border-[1px] border-black bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center px-2 py-2 text-sm`}
                >
                  <ShareIcon className="h-5 mr-5" /> Share
                </button>
              )}
            </Menu.Item>
          </div>
          {user?._id === author._id && (
            <>
              <div className="p-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center px-2 py-2 text-sm`}
                    >
                      <PencilAltIcon className="h-5 mr-5" /> Update
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="p-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center px-2 py-2 text-sm`}
                    >
                      <TrashIcon className="h-5 mr-5" /> Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </>
          )}

          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center px-2 py-2 text-sm`}
                >
                  <BookmarkIcon className="h-5 mr-5" /> Bookmark
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default PostMenu;
