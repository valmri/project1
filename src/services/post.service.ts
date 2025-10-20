const fetchPosts = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  return data;
};

const postService = {
  fetchPosts,
};

export default postService;
