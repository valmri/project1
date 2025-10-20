const fetchPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
  const data = await res.json();
  return data;
};

const fetchPostById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`);
  const data = await res.json();
  return data;
};

const postService = {
  fetchPosts,
  fetchPostById,
};

export default postService;
