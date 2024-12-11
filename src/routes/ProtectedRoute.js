import React from "react";
import { Navigate } from "react-router-dom";
import PATH from "../constants/path";

const ProtectedRoute = ({ children }) => {
  const isLogin = JSON.parse(localStorage.getItem("token"));
  return isLogin ? children : <Navigate to={PATH.login} />;
};

export default ProtectedRoute;
