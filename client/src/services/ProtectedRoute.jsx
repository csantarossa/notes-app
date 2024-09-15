import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  if (!user) return navigate("/login");
  return children;
};

export default ProtectedRoute;
