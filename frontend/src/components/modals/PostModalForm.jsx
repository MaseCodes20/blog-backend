import { CameraIcon } from "@heroicons/react/outline";
import React from "react";
import { useState } from "react";
import { useRef } from "react";

function PostModalForm() {
  const [selectedFile, setSelectedFile] = useState(null);

  const filePickerRef = useRef();

  const addImageToPost = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };
  return (
    <form className="my-5 w-full h-full">
      <div className="flex flex-col mb-5">
        <label htmlFor="title" className="text-left text-[13px]">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="border border-gray-300 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black"
        />
      </div>

      {selectedFile ? (
        <img
          src={selectedFile}
          className="w-full h-[150px] object-contain mb-5"
          alt=""
          onClick={() => setSelectedFile(null)}
        />
      ) : (
        <div
          className="w-full h-[150px] bg-gray-100 flex items-center justify-center cursor-pointer mb-5"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-10 w-10 text-red-600" aria-hidden="true" />
        </div>
      )}

      <input
        type="file"
        name="image"
        id="image"
        ref={filePickerRef}
        onChange={addImageToPost}
        hidden
      />

      <div className="flex flex-col mb-5">
        <label htmlFor="content" className="text-left text-[13px]">
          Content
        </label>
        <textarea
          name="content"
          id="content"
          className="border p-2 border-gray-300 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black h-[200px] box-border resize-none"
        />
      </div>

      <div className="relative">
        <input
          type="submit"
          value="Post"
          className="absolute right-0 pt-[7px] px-[16px] pb-[9px] bg-black rounded-full text-white font-medium cursor-pointer"
        />
      </div>
    </form>
  );
}

export default PostModalForm;
