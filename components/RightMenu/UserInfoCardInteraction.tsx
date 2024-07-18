"use client";
import { switchBlock, switchFollow } from "@/lib/actions";
import React, { useOptimistic, useState } from "react";

interface UserInfoCardInteractionProps {
  userId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}

const UserInfoCardInteraction = ({
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
    switchOptimisticState("follow");
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

  const block = async () => {
    switchOptimisticState("block");
    try {
      await switchBlock(userId);
      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (err) {}
  };

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...state,
            following: state.following && false,
            followingRequestSend:
              !state.followingRequestSend && !state.followingRequestSend
                ? true
                : false,
          }
        : {
            ...state,
            blocked: !state.blocked,
          },
  );
  return (
    <div className="flex flex-col gap-2">
      <form action={follow} className="">
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingRequestSend
            ? "Friend Request Send"
            : "Follow"}
        </button>
      </form>
      <form action={block} className="self-end">
        <button className="flex self-end">
          <span className="flex text-red-400 self-end text-xs cursor-pointer">
            {optimisticState.blocked ? "Unlock User" : "Block User"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default UserInfoCardInteraction;
