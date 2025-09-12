import { useSelector } from "react-redux";
import PostCard from "./PostCard";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <>
      {posts.map((post, index) => (
        <PostCard key={post._id} post={post} />
      ))}
    </>
  );
};

export default Post;
