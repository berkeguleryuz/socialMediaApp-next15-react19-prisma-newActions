import React from "react";
import Post from "@/components/Feed/Post";

const Feed = () => {
  return (
    <div className="p-4 shadow-md bg-white rounded-lg flex flex-col gap-12">
      {/* POST */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
