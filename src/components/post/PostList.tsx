"use client";

import { Button } from "../ui/button";
import { usePost } from "@/hook/usePost";

type Post = {
  id: string;
  title: string;
  content: string;
};

const PostList = () => {
  const { posts } = usePost() as { posts: Post[] };

  return (
    <>
      <h1>Post list component</h1>

      {(posts ?? []).map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
      <Button>ahahahah</Button>
    </>
  );
};

export default PostList;
