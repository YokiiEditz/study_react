import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const contextValues = { user, login, logout };

  return (
    <>
      <AuthContext.Provider value={contextValues}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
