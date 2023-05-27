import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

// create context for authentication
const AuthContext = createContext();

// create provider for authentication context
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    User: null,
    token: "",
  });

  // default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        User: parseData.User,
        token: parseData.token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook for using authentication context
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
