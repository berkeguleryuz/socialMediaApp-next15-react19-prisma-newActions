import Image from "next/image";
import React from "react";

const Ads = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* top */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span className="">Sponsored Ads</span>
        <Image src={"/more.png"} width={16} height={16} alt="" />
      </div>
      {/* bottom */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div className="relative">
          <Image
            src={
              "https://images.pexels.com/photos/25300367/pexels-photo-25300367/free-photo-of-peyzaj-manzara-alan-tarla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            fill
            className="rounded-lg object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Ads;
