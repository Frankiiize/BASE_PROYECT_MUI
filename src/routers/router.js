import React from "react"
import { Navigate, Outlet, Route, useRoutes } from "react-router-dom";

const Login = React.lazy(() => import('../views/Login'))

  let publicRoutes = [
    {path:"/", element:<h1>Public Route home</h1>},
    {path:"/login", element:<Login />}
  ]
  let adminRoutes = [
    {path:"/admin", element:<h1>Public Route home</h1>},
  ]
  let userRoutes = [
    {path:"/admin", element:<h1>Public Route home</h1>},
  ]
 /*  let ProtectedRoutes = useRoutes([
    {path: 'dashboard', element:<h1>Dashboard Page</h1>},
    {path: 'profile', element:<h1>Profile Page</h1>}
  ]) */

  function renderSwitch(user) {
    switch (user.role) {
      case "user":
        return userRoutes;
      case "admin":
        return adminRoutes;
      default:
        return publicRoutes
    }
  }
  
  const conditional = renderSwitch(JSON.parse(window.localStorage.getItem("user")));

export default conditional;
