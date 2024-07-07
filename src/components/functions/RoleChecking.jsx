import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const RoleChecking = ({ role, children, path }) => {
  const { user } = useContext(AuthContext);
  if (user?.role !== role) return <Navigate to={path}></Navigate>;
  else
    return <>{children}</>;
};

export default RoleChecking;
