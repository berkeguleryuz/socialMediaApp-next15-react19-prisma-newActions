"use client";
import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestsList = ({ requests }: { requests: RequestWithUser[] }) => {
  const [requestState, setRequestSate] = useState(requests);

  const accept = async (requestId: string, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestSate((prev) => prev.filter((req) => req.id !== requestId));
    } catch (err) {
      console.log(err);
    }
  };

  const decline = async (requestId: string, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await declineFollowRequest(userId);
      setRequestSate((prev) => prev.filter((req) => req.id !== requestId));
    } catch (err) {
      console.log(err);
    }
  };

  const [optimicticRequests, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value) => state.filter((req) => req.id !== value),
  );
  return (
    <div className="">
      {optimicticRequests.map((request) => (
        <div className="flex items-center justify-between" key={request.id}>
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar || "/noAvatar.png"}
              alt=""
              width={100}
              height={100}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">
              {request.sender.name && request.sender.username
                ? request.sender.name + " " + request.sender.surname
                : request.sender.username}
            </span>
          </div>
          <div className="flex gap-3 justify-end flex-1">
            <form
              action={() => accept(request.id, request.sender.id)}
              className="">
              <button>
                <Image
                  src={"/accept.png"}
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
            <form action={() => decline(request.id, request.sender.id)}>
              <button>
                <Image
                  src={"/reject.png"}
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestsList;
