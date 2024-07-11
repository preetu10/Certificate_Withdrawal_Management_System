/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const RoleChecking = ({ role, children, path }) => {
  const { user } = useContext(AuthContext);
  if (user?.role !== role) return <Navigate to={path}></Navigate>;
  // if (!roles.includes(user?.role)) {
  //   return <Navigate to={path} />;
  // }
  else return <>{children}</>;
};

export default RoleChecking;
// foyazunnesamomo.345@gmail.com
// 113asd@#
// http://api/bike-csecu.com/upload/
//22c4de9a-3bb0-11ef-9101-3c5282764ceb---shojib
//93712c7c-0304-11ef-a96d-3c5282764ceb --momo
