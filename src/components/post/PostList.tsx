"use client";

import { Button } from "../ui/button";
import { usePost } from "@/hook/usePost";
import PostCard from "./PostCard";

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date | null;
};

const PostList = () => {
  const { posts } = usePost() as { posts: Post[] };

  return (
    <>
      <h1 className="font-black text-2xl mb-5">Last posts</h1>

      <div className="grid gap-5">
        {(posts ?? []).map((post) => (
          <PostCard key={post.id} post={post} isPreview={true}></PostCard>
        ))}
      </div>
    </>
  );
};

export default PostList;
