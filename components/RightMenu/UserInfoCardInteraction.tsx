"use client";
import { switchFollow } from "@/lib/actions";
import React, { useState } from "react";

interface UserInfoCardInteractionProps {
  currentUserId: string;
  userId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}

const UserInfoCardInteraction = ({
  currentUserId,
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: UserInfoCardInteractionProps) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSend: isFollowingSent,
  });

  const follow = async () => {
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingRequestSend:
          !prev.followingRequestSend && !prev.followingRequestSend
            ? true
            : false,
      }));
    } catch (err) {}
  };
  return (
    <>
      <form action="" className="">
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {userState.following
            ? "Following"
            : userState.followingRequestSend
            ? "Friend Request Send"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="flex text-red-400 self-end text-xs cursor-pointer">
          {userState.blocked ? "Unlock User" : "Block User"}
        </span>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
