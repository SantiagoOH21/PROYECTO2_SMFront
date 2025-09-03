import { useSelector } from "react-redux";
const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <h1>Profile</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <img
        src={`http://localhost:3000/uploads/${user.avatar}`}
        alt={user.name}
        style={{ width: "200px", height: "auto", borderRadius: "50%" }}
      />
    </>
  );
};

export default Profile;
