import Image from "next/image";
import React from "react";

const Ads = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* top */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span className="">Sponsored Ads</span>
        <Image src={"/more.png"} width={16} height={16} alt="image" />
      </div>
      {/* bottom */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}>
          <Image
            src={
              "https://images.pexels.com/photos/25300367/pexels-photo-25300367/free-photo-of-peyzaj-manzara-alan-tarla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            fill
            className="rounded-lg object-cover"
            alt="image"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/25300367/pexels-photo-25300367/free-photo-of-peyzaj-manzara-alan-tarla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
            alt="image"
          />
          <span className="text-blue-500 font-medium">Cool Lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aut, fugiat voluptatem eos tenetur in unde doloribus! Quisquam, expedita voluptatum."
            : size === "md"
            ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim consectetur nulla sint aliquid. Possimus deserunt soluta molestias accusantium eveniet reprehenderit hic dolorem quidem sequi eum inventore id enim corporis reiciendis animi, nesciunt ipsam incidunt labore. Eaque."
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa architecto officia qui illum illo ex. Eligendi mollitia voluptatibus consequatur rem iusto minima exercitationem ullam perferendis cum aliquam itaque iure, at quam asperiores quae fuga amet tenetur quis ab ducimus officiis repellendus est deserunt similique? Inventore perferendis possimus excepturi non distinctio eveniet qui !"}
        </p>
        <button className="bg-gray-200 text-gray-600 p-2 text-xs rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Ads;
