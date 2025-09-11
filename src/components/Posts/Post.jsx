import { useSelector } from "react-redux";
import PostCard from "./PostCard";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <>
      <h1>Post</h1>
      {posts.map((post, index) => (
        <PostCard key={post._id} post={post} />
      ))}
    </>
  );
};

export default Post;
