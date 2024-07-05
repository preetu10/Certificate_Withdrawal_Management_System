import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Navbar from "@/pages/Navbar/Navbar";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loadingUser, setLoadingUser } = useContext(AuthContext);
  console.log(user, loadingUser);
  if (loadingUser) return <div> Loading ....</div>;
  else if (!user) return <Navigate to="/login"></Navigate>;
  else
    return (
      <>
        <Navbar></Navbar>
        {children}
      </>
    );
};

export default PrivateRoute;
