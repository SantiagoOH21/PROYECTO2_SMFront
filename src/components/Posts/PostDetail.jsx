import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../redux/posts/postsSlice";
import AddComment from "../Comments/AddComment";
import PostCard from "./PostCard";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);

  const refreshPost = () => {
    dispatch(getById(id));
  };

  useEffect(() => {
    refreshPost();
  }, [dispatch, id]);

  return (
    <>
      <h1>PostDetail</h1>

      {post && <PostCard post={post} showLink={false} />}
      <hr />
      <AddComment postId={id} onCommentAdded={refreshPost} />
    </>
  );
};

export default PostDetail;
