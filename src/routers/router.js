import React, { useContext } from "react"
import {  useRoutes } from "react-router-dom";
import { authContext } from "../context/authContext";

const Login = React.lazy(() => import('../views/login/Login'));
const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))

let publicRoutes = {}
let adminRoutes = [
  {path:"/dashboard", element: <Dashboard />},
  {path:"/perfil", element:<h1>perfil</h1>},
]
let userRoutes = [
  {path:"/dashboard", element: <Dashboard />},
  {path:"/perfil", element:<h1>perfil</h1>},
]
 /*  let ProtectedRoutes = useRoutes([
    {path: 'dashboard', element:<h1>Dashboard Page</h1>},
    {path: 'profile', element:<h1>Profile Page</h1>}
  ]) */

  const localStorageValidation = (localStorage.length > 0) ? JSON.parse(localStorage.getItem("user")) : null;
  
  function renderSwitch(role) {
    switch (role) {
      case "user":
        return userRoutes;
      case "admin":
        return adminRoutes;
      default:
        return publicRoutes
    }
  }
  

  const conditional = renderSwitch(localStorageValidation !== null ? localStorageValidation.user.role : null);


export  function  PrivateRoutes() {
  const { user } = useContext(authContext)
  debugger
  let ruta = useRoutes(conditional)
  return ruta
}
export  function  PublicRoutes() {
  let ruta = useRoutes(conditional)
  return ruta
}
