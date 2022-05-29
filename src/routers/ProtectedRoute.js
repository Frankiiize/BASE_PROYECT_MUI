import React, { useContext, useState } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { authContext } from "../context/authContext";


export const ProtectedRoute = (props) => {
  const { user } = useContext(authContext);
  debugger
  return (
    !!user.logged 
      ? <>
          <Outlet />
        </>
      : <Navigate to="/login" />
  );
};
