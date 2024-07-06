import { baseURL } from "@/customHooks/useAxiosPublic";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const userRemove = () => {
    setUser(null);
    setLoadingUser(false);
    localStorage?.removeItem("session_id");
  };

  const logOut = () => {
    userRemove();
  };

  useEffect(() => {
    let func = async () => {
      const session_id = localStorage?.getItem("session_id");
      if (session_id) {
        const response = await axios.get(baseURL + "/myInfo", {
          headers: {
            Authorization: "Bearer " + session_id,
          },
        });
        // console.log(response?.data?.user);
        if (response?.data?.user?.user_id) {
          setUser({
            ...response?.data?.user,
            role: response?.data?.role?.role || "student",
          });
          setLoadingUser(false);
        } else {
          userRemove();
        }
      } else {
        userRemove();
      }
    };
    try {
      func();
    } catch (error) {
      userRemove();
    }
  }, []);
  const value = {
    user,
    logOut,
    setUser,
    loadingUser,
    setLoadingUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
