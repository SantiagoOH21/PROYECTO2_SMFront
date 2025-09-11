import { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../redux/posts/postsSlice";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  const observer = useRef();

  const { posts, isLoading, currentPage, totalPages } = useSelector(
    (state) => state.posts
  );

  const lastPostRef = useCallback(
    (node) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && currentPage < totalPages) {
          dispatch(getAll(currentPage + 1));
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, currentPage, totalPages, dispatch]
  );

  useEffect(() => {
    const fetchPosts = async () => {
      await dispatch(getAll(1));
      await dispatch(reset());
    };
    fetchPosts();
  }, [dispatch]);

  useEffect(() => {
    if (currentPage >= totalPages) return;
    const lastPostEl = document.querySelector(".post:last-child");
    if (lastPostEl) lastPostRef(lastPostEl);
  }, [posts, lastPostRef]);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      {isLoading && <p>Cargando más posts...</p>}
    </>
  );
};

export default Posts;
