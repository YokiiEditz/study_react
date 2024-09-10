import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

const Profile = () => {
  const auth = useAuth();

  const navigate = useNavigate();

  const hanldeLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome {auth.user}</h2>
      <button onClick={hanldeLogout}>Logout</button>
    </div>
  );
};

export default Profile;
