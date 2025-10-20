"use client";

import PostCard from "@/components/post/PostCard";
import { Post } from "@/generated/prisma";
import postService from "@/services/post.service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SinglePostPage = () => {
  const params = useParams();
  const id = params.id as string;
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    fetchOnePost(id);
  }, [id]);

  const fetchOnePost = async (id: string) => {
    try {
      const data = await postService.fetchPostById(id);
      setPost(data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <h1>Single post page</h1>
      {post ? <PostCard post={post} /> : <p>Loading...</p>}
    </>
  );
};

export default SinglePostPage;
