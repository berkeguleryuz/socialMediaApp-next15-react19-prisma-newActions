import prisma from "@/lib/client";
import Image from "next/image";
import React from "react";
import CommentList from "@/components/Feed/CommentList";

const Comments = async ({ postId }: { postId: string }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });
  return (
    <div>
      {/* WRITE */}
      <CommentList comments={comments} postId={postId} />
    </div>
  );
};

export default Comments;
