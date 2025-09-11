import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../../redux/profileSlice";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { deletePost, getById } from "../../redux/posts/postsSlice";
import AddPost from "../Posts/AddPost";
import EditModal from "../Posts/EditModal";
import PostCard from "../Posts/PostCard";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, posts, followersCount, followingCount, loading, error } =
    useSelector((state) => state.profile);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (id) => {
    dispatch(getById(id));
    setIsModalVisible(true);
  };

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return null;

  const avatarUrl = user.avatar
    ? `http://localhost:3000/uploads/${user.avatar}`
    : "/default-avatar.png";

  return (
    <>
      <h1>Perfil de {user.name}</h1>
      <AddPost />
      <img
        src={avatarUrl}
        alt={user.name}
        style={{ width: "200px", height: "auto", borderRadius: "50%" }}
      />
      <p>Email: {user.email}</p>
      <p>Seguidores: {followersCount}</p>
      <p>Siguiendo: {followingCount}</p>

      <h2>Publicaciones</h2>
      {posts.length === 0 ? (
        <p>No hay publicaciones.</p>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post._id}>
              {/* <h2>{post.name}</h2>
              <p>{post.text}</p>
              <small>{new Date(post.createdAt).toLocaleString()}</small> */}
              <PostCard post={post} showLink={false} showComments={true} />

              <div>
                <button>
                  <DeleteOutlined
                    onClick={() => {
                      dispatch(deletePost(post._id));
                      dispatch(fetchProfile());
                    }}
                  />
                </button>
                <button>
                  <EditOutlined onClick={() => showModal(post._id)} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <EditModal visible={isModalVisible} setVisible={setIsModalVisible} />
    </>
  );
};

export default Profile;
