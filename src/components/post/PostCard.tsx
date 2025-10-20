import { Post } from "@/generated/prisma";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-amber-50 p-5 rounded-2xl">
      <h2>{post.title}</h2>
      <p>
        {post.content.length > 50
          ? post.content.slice(6, 50) + "..."
          : post.content}
      </p>
    </div>
  );
};

export default PostCard;
