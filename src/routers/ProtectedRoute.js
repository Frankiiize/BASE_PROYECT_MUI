import React, { useContext, useState } from "react";
import { Navigate, Outlet, Route, useLocation, useOutlet } from "react-router-dom";
import { authContext } from "../context/authContext";


const ProtectedRoute = () => {
  const { user } = useContext(authContext);
  const location = useOutlet();
  return (
    !!user.logged 
      ? <>
          <Outlet />
        </>
      : <Navigate to="/login" />
  );
};

export default ProtectedRoute;