import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <>
      <h1>Post</h1>
      {posts.map((post, index) => (
        <div key={post._id} className="post">
          <Link to={`/post/${post._id}`}>
            <h2>{post.name ? post.name : `Post nº ${index}`}</h2>
          </Link>

          <img
            src={`http://localhost:3000/uploads/${post.image}`}
            alt={post.name}
            width="300px"
          />

          <div>
            <h3>{post.userId.name}</h3>
            <p>{post.text}</p>
          </div>
          <small>{new Date(post.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </>
  );
};

export default Post;
