import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, isLoading } = useContext(UserContext);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
