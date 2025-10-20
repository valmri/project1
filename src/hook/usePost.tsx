import { Post } from "@/generated/prisma";
import postService from "@/services/post.service";
import { useEffect, useState } from "react";

export const usePost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isPending, setIsPending] = useState<boolean>();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsPending(true);
    try {
      const data = await postService.fetchPosts();
      setPosts(data);
      setIsPending(false);
    } catch (e) {
      console.error(e);
    }
  };

  return { posts, fetchPosts, setPosts, isPending };
};
