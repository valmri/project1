import { Post } from "@/generated/prisma";

interface PostCardProps {
  post: Post;
  isPreview: boolean;
}

const PostCard = ({ post, isPreview = false }: PostCardProps) => {
  return (
    <div className="bg-amber-50 p-5 rounded-2xl">
      <h2 className="font-bold text-lg">{post.title}</h2>
      <p className="mb-5 mt-2">
        {post.content.length > 50 && isPreview
          ? post.content.slice(6, 50) + "..."
          : post.content}
      </p>
      {isPreview && (
        <a
          href={`posts/${post.id}`}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Lire plus
        </a>
      )}
    </div>
  );
};

export default PostCard;
