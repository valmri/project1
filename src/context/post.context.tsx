"use client";
import { Post } from "@/generated/prisma";
import { createContext, useState } from "react";

interface InterfacePostContext {
  posts: Post[];
  fetchPost: (id: string) => Promise<void>;
}

const PostContext = createContext<InterfacePostContext>({
  posts: [],
  fetchPost: async () => {},
});

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};
