import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProfileCard from "@/components/LeftMenu/ProfileCard";
import Ads from "@/components/Ads";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-2 text-gray-500">
        The bottoms are not active. But you can use profile area, posts,
        stories, comments and likes
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg cursor-not-allowed">
          <Image src="/posts.png" alt="image" width={20} height={20} />
          <span>My Posts </span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg cursor-not-allowed">
          <Image src="/activity.png" alt="image" width={20} height={20} />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg cursor-not-allowed">
          <Image src="/market.png" alt="image" width={20} height={20} />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg cursor-not-allowed">
          <Image src="/events.png" alt="image" width={20} height={20} />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg cursor-not-allowed">
          <Image src="/albums.png" alt="image" width={20} height={20} />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg cursor-not-allowed">
          <Image src="/videos.png" alt="image" width={20} height={20} />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg cursor-not-allowed">
          <Image src="/news.png" alt="image" width={20} height={20} />
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg cursor-not-allowed">
          <Image src="/courses.png" alt="image" width={20} height={20} />
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg cursor-not-allowed">
          <Image src="/lists.png" alt="image" width={20} height={20} />
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg">
          <Image src="/settings.png" alt="image" width={20} height={20} />
          <span>Settings</span>
        </Link>
      </div>
      <Ads size="sm" />
    </div>
  );
};

export default LeftMenu;
