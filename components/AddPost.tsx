"use client";
import Image from "next/image";
import React, { useState } from "react";

import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";

const AddPost = () => {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  if (!isLoaded) {
    return "Loading";
  }

  return (
    <div className="p-4 shadow-md bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src={user?.imageUrl || "/noAvatar.png"}
        alt="logo"
        width={100}
        height={100}
        className="h-12 w-12 object-cover rounded-full ring-2"
      />
      {/* POST */}
      <div className="flex-1">
        {/* Text input */}
        <form action="" className="flex gap-4">
          <textarea
            placeholder="What's on your mind?"
            className="bg-slate-100 rounded-lg flex-1 p-2"
            name="desc"
            onChange={(e) => setDesc(e.target.value)}
          />
          <Image
            src={"/emoji.png"}
            alt="logo"
            width={25}
            height={25}
            className="h-5 w-5 cursor-pointer self-end"
          />
          <button>Send</button>
        </form>
        {/* Post options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result, { widget }) => {
              setImg(result.info);
              widget.close();
            }}>
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}>
                  <Image
                    src={"/addimage.png"}
                    alt="logo"
                    width={25}
                    height={25}
                    className="h-5 w-5 cursor-pointer self-end"
                  />
                  Photo
                </div>
              );
            }}
          </CldUploadWidget>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src={"/addVideo.png"}
              alt="image"
              width={25}
              height={25}
              className="h-5 w-5 cursor-pointer self-end"
            />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src={"/addevent.png"}
              alt="video"
              width={25}
              height={25}
              className="h-5 w-5 cursor-pointer self-end"
            />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src={"/poll.png"}
              alt="logo"
              width={25}
              height={25}
              className="h-5 w-5 cursor-pointer self-end"
            />
            Photo
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
