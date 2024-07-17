import React, { Suspense } from "react";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Ads from "../Ads";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <div className="flex flex-col gap-6">
          <Suspense fallback="loading">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading">
            <UserMediaCard user={user} />
          </Suspense> 
        </div>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ads size="md" />
    </div>
  );
};

export default RightMenu;
