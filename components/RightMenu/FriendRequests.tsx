import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium text-xs">
        <span className="text-gray-500 ">Friend Requests</span>
        <Link href={"/"} className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/19640282/pexels-photo-19640282/free-photo-of-balade-d-hi-ver.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            width={100}
            height={100}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">John Doe</span>
        </div>
        <div className="flex gap-3 justify-end flex-1">
          <Image
            src={"/accept.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src={"/reject.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/19640282/pexels-photo-19640282/free-photo-of-balade-d-hi-ver.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            width={100}
            height={100}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">John Doe</span>
        </div>
        <div className="flex gap-3 justify-end flex-1">
          <Image
            src={"/accept.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src={"/reject.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/19640282/pexels-photo-19640282/free-photo-of-balade-d-hi-ver.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            width={100}
            height={100}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">John Doe</span>
        </div>
        <div className="flex gap-3 justify-end flex-1">
          <Image
            src={"/accept.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src={"/reject.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
