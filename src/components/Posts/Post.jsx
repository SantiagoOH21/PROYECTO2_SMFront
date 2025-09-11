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

          {post.image && (
            <img
              src={`http://localhost:3000/uploads/${post.image}`}
              alt={post.name}
              width="300px"
            />
          )}

          <div>
            <h3>{post.userId.name}</h3>
            <p>{post.text}</p>
          </div>
          <small>{new Date(post.createdAt).toLocaleString()}</small>

          {post.comments && post.comments.length > 0 && (
            <div className="comments">
              <h4>Comentarios:</h4>
              {post.comments.map((comment) => (
                <div key={comment._id} className="comment">
                  <p>
                    <strong>{comment.userId.name}:</strong> {comment.content}
                  </p>
                  <small>{new Date(comment.createdAt).toLocaleString()}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Post;
