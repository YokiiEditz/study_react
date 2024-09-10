import { useState } from "react";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    console.log(auth.login(user));
    navigate("/");
  };

  return (
    <div>
      <div>
        <label htmlFor="">Username:</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
