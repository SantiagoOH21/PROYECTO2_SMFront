import { Link } from "react-router-dom";
import "../../assets/styles/components/postCard.scss";

const PostCard = ({ post, showLink = true, showComments = true }) => {
  return (
    <div className="post">
      {showLink ? (
        <Link to={`/post/${post._id}`}>
          <h2>{post.name || "Sin título"}</h2>
        </Link>
      ) : (
        <h2>{post.name || "Sin título"}</h2>
      )}

      {post.image && (
        <img
          src={`http://localhost:3000/uploads/${post.image}`}
          alt={post.name}
          width="300px"
        />
      )}

      <p>
        <strong>{post.userId?.name}:</strong> {post.text}
      </p>

      <small>{new Date(post.createdAt).toLocaleString()}</small>

      {showComments && post.comments?.length > 0 && (
        <div className="comments">
          <h4>Comentarios:</h4>
          {post.comments.map((comment) => (
            <div key={comment._id} className="comment">
              <p>
                <strong>{comment.userId?.name}:</strong> {comment.content}
              </p>

              {comment.image && (
                <img
                  src={`http://localhost:3000/uploads/${comment.image}`}
                  alt="Comentario"
                  width="200px"
                  style={{ marginTop: "10px", borderRadius: "5px" }}
                />
              )}

              <small>{new Date(comment.createdAt).toLocaleString()}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard;
