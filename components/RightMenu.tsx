import React from "react";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Ads from "./Ads";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <div className="flex flex-col gap-6">
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </div>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ads size="md" />
    </div>
  );
};

export default RightMenu;
