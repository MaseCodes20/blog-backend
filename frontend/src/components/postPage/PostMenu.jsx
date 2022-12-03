import React, { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  BookmarkIcon,
  PencilAltIcon,
  DotsVerticalIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import DeletePostButton from "./DeletePostButton";
import { useNavigate } from "react-router-dom";
import { deletePost, reset } from "../../features/post/postsSlice";
import { updateUser } from "../../features/users/usersSlice";

function PostMenu({ postId, author }) {
  const { user } = useSelector((state) => state.auth);
  const { isSuccess, isError, message, deletedPost } = useSelector(
    (state) => state.posts
  );
  const userData = useSelector((state) =>
    state.users.users.find((currentUser) => currentUser._id === user._id)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bookmarkPost = () => {
    const bookmarks = userData?.bookmarks.map((bookmark) => bookmark);

    let data = {
      userData: {
        bookmarks: [],
      },
      token: user.token,
      userId: user._id,
    };

    if (
      userData?.bookmarks?.find((bookmark) => bookmark?.postId === postId)
        ?.postId === postId
    ) {
      const updatedBookmarks = bookmarks?.filter(
        (bookmark) => bookmark?.postId !== postId
      );

      data.userData.bookmarks = updatedBookmarks;
      dispatch(updateUser(data));
    } else {
      data.userData.bookmarks = [...bookmarks, { postId }];
      dispatch(updateUser(data));
    }
  };

  const removePost = () => {
    const data = {
      postId,
      token: user?.token,
    };

    dispatch(deletePost(data));
    navigate("/profile");
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && deletedPost?._id === postId) {
      navigate("/profile");
    }

    dispatch(reset());
  }, [isSuccess, isError, message, dispatch, navigate]);

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
        <Menu.Items className="absolute right-0 mt-[19px]  w-40 origin-top-right divide-y border-[1px] border-black bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
          {user?._id === author?._id && (
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
                  {/* <DeletePostButton postId={postId} /> */}
                  {({ active }) => (
                    <button
                      onClick={() => {
                        removePost();
                        bookmarkPost();
                      }}
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
                  onClick={bookmarkPost}
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center px-2 py-2 text-sm`}
                >
                  <BookmarkIcon
                    className={`${
                      userData?.bookmarks?.find(
                        (bookmark) => bookmark?.postId === postId
                      )?.postId === postId && "fill-black"
                    } h-5 mr-5`}
                  />{" "}
                  Bookmark
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
