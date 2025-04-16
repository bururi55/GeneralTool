import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={`/GeneralTool?attemptedAccess=true`}
        state={{ from: location }}
      />
    );
  }

  return children;
};

export default PrivateRoute;
