import { useSelector } from "react-redux";
const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  const avatarUrl = user.avatar
    ? `http://localhost:3000/uploads/${user.avatar}`
    : "/default-avatar.png";

  return (
    <>
      <h1>Profile</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <img
        src={avatarUrl}
        alt={user.name}
        style={{ width: "200px", height: "auto", borderRadius: "50%" }}
      />
    </>
  );
};

export default Profile;
