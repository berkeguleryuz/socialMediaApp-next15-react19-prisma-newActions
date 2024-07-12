"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { ClerkLoaded, ClerkLoading, SignedIn } from "@clerk/nextjs";
import { SignedOut, UserButton } from "@clerk/clerk-react";
import { BsPeople } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link href={"/"} className="flex  items-center gap-2">
            <Image
              src={"/home.png"}
              alt="Homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="">HomePage</span>
          </Link>

          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={"/friends.png"}
              alt="Friends"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="">Friends</span>
          </Link>

          <Link href={"/"} className="flex  items-center gap-2">
            <Image
              src={"/stories.png"}
              alt="Stories"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="">Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
            <input type="text" placeholder="Search..." className="bg-transparent outline-none" />
            <Image src={"/search.png"} alt="search" width={20} height={20} />
        </div>
      </div>
      {/* RIGHT    */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-t-transparent" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
                <Image src={"/people.png"} alt="profile" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
                <Image src={"/messages.png"} alt="messages" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
                <Image src={"/notifications.png"} alt="notificationds" width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
          <div className="flex items-center gap-2 text-sm">
                <BsPeople />
                <Link href={"/sign-in"}>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
