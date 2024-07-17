import Image from "next/image";
import React from "react";
import prisma from "../lib/client";
import { auth } from "@clerk/nextjs/server";

const AddPost = () => {
  const { userId } = auth();
  // console.log(userId);

  // const testAction = async (formData: FormData) => {
  //   "use server";

  //   if (!userId) return;
  //   const desc = formData.get("desc") as string;
  //   try {
  //     const response = await prisma.post.create({
  //       data: {
  //         userId: userId,
  //         desc: desc,
  //       },
  //     });
  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className="p-4 shadow-md bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src={
          "https://images.pexels.com/photos/27057427/pexels-photo-27057427/free-photo-of-kent-sehir-insanlar-sanat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
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
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src={"/addimage.png"}
              alt="logo"
              width={25}
              height={25}
              className="h-5 w-5 cursor-pointer self-end"
            />
            Photo
          </div>
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
