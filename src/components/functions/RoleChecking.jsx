/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const RoleChecking = ({ role, children, path }) => {
  const { user } = useContext(AuthContext);
  // if (user?.role !== role) return <Navigate to={path}></Navigate>;
  if (!role.includes(user?.role)) return <Navigate to={path} />;
  else return <>{children}</>;
};

export default RoleChecking;
// foyazunnesamomo.345@gmail.com
// 113asd@#
// http://api/bike-csecu.com/upload/
//22c4de9a-3bb0-11ef-9101-3c5282764ceb---shojib
//93712c7c-0304-11ef-a96d-3c5282764ceb --momo

/// 4f480a8e-e707-11ee-9dff-68f728f17b7e -- provost(janonetri hall)
/// ayeshasareen48@gmail.com (email) pass: 81be0c8d

/// certificate verifier1
//pass : c981e7d5 email: zahidhasandfree@gmail.com

/// certificate verifier2
//pass: 515e8ded email: nusratsharminrini@gmail.com

//exam-controller email: samihaaktter@gmail.com pass: 6a8df97e
