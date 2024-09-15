import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    checkAuth();
  }, [isLoaded]);

  const checkAuth = async () => {
    try {
      const response = await axios.get("/auth/verify");
      if (response.data.error) {
        navigate("/login");
      } else {
        setUser(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoaded(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
