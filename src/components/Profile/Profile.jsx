import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../../redux/profileSlice";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { deletePost, getById } from "../../redux/posts/postsSlice";
import AddPost from "../Posts/AddPost";
import EditModal from "../Posts/EditModal";
import PostCard from "../Posts/PostCard";
import "../../assets/styles/views/profile.scss";

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
    <div className="profile-container">
      <h1>Perfil de {user.name}</h1>

      <div className="profile-header">
        <img src={avatarUrl} alt={user.name} className="profile-avatar" />

        <div className="profile-info">
          <p>Correo electrónico: {user.email}</p>
        </div>

        <div className="stats">
          <div className="stat">
            Seguidores <span>{followersCount}</span>
          </div>
          <div className="stat">
            Siguiendo <span>{followingCount}</span>
          </div>
        </div>
      </div>

      <AddPost />
      <div className="posts-section">
        <h2>Publicaciones</h2>
        {posts.length === 0 ? (
          <p>No hay publicaciones.</p>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="post-card">
              <PostCard post={post} showLink={false} showComments={true} />

              <div className="post-actions">
                <button
                  className="delete-btn"
                  onClick={() => {
                    dispatch(deletePost(post._id));
                    dispatch(fetchProfile());
                  }}
                >
                  <DeleteOutlined />
                </button>
                <button
                  className="edit-btn"
                  onClick={() => showModal(post._id)}
                >
                  <EditOutlined />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <EditModal visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
  );
};
export default Profile;
