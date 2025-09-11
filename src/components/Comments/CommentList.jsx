import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../redux/comments/commentSlice";

const CommentList = () => {
  const dispatch = useDispatch();
  const { commentList } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <>
      <h1>Comments</h1>
      {commentList &&
        commentList.map((comment) => (
          <div className="book" key={comment._id}>
            <p>
              <strong>{comment.userId.name}:</strong> {comment.content}
            </p>
            <small>{new Date(comment.createdAt).toLocaleString()}</small>
          </div>
        ))}
    </>
  );
};

export default CommentList;
