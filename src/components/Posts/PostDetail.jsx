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
      <h3>{post.userId?.name}</h3>
      <p>{post.text}</p>
      <img
        src={`http://localhost:3000/${post.image}`}
        alt={`Imagen del post ${post.name}`}
        width="300px"
      />
    </>
  );
};

export default PostDetail;
