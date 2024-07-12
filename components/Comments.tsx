import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div>
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src={
            "https://images.pexels.com/photos/27057427/pexels-photo-27057427/free-photo-of-kent-sehir-insanlar-sanat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          width={100}
          height={100}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment"
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src={"/emoji.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Comments */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src={
              "https://images.pexels.com/photos/27057427/pexels-photo-27057427/free-photo-of-kent-sehir-insanlar-sanat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          {/* DESCRIPTION */}
          <div className="flex flex-col gap-2 flex-1">
            {/* NAME */}
            <span className="font-medium">John Doe</span>
            {/* COMMENT */}
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ad
              provident quae suscipit libero nulla labore, doloremque
              exercitationem ipsum aperiam, praesentium quam voluptate! Nisi,
              tempora sed! Nihil, voluptas! Itaque illo iusto neque, dignissimos
              minima ipsum quidem mollitia deleniti voluptates quod sapiente ex
              excepturi placeat ea, id aliquid quis, hic non eius provident
              quos. Dignissimos similique atque expedita libero temporibus
              delectus eius assumenda sunt maxime ea, laudantium deleniti sed
              dolorem quam accusantium cum repellat optio quos? Blanditiis
              ratione dolores atque provident autem officia. Placeat error eius
              quaerat? Ipsam, illum!
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-4">
              <div className="flex items-center gap-4">
                <Image
                  src={"/like.png"}
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">444 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>

          {/* ICON */}
          <Image
            src={"/more.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer h-4 w-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
