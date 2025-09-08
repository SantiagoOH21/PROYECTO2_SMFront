import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPostByName } from "../../redux/posts/postsSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { postName } = useParams();

  useEffect(() => {
    dispatch(getPostByName(postName));
  }, [postName]);

  return (
    <>
      <h1>Search</h1>
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
export default Search;
