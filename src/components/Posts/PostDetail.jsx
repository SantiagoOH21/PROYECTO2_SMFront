import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../redux/posts/postsSlice";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  return (
    <>
      <h1>PostDetail</h1>
      <h2>{post.name}</h2>
      {post.image && (
        <img
          src={`http://localhost:3000/uploads/${post.image}`}
          alt={post.name}
          width="300px"
        />
      )}
      <h3>{post.userId?.name}</h3>
      <p>{post.text}</p>
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
    </>
  );
};

export default PostDetail;
