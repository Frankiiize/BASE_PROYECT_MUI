import React from "react";
import { useRoutes } from "react-router-dom";

const Login = React.lazy(() => import('../views/login/Login'));
const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'));
const Protected = React.lazy(() => import('../routers/ProtectedRoute'));

const localStorageValidation = (localStorage.length > 0) ? JSON.parse(localStorage.getItem("user")).user.role : null;

let adminRoutes = [
  {path:"dashboard", element: <h1>index page admin</h1>},
  {path:"admin", element:  <h1>index page admin2</h1>},
  {path:'*',element: <h1>not found</h1>}
];
let rutasUsuario = [
  {path:"dashboard", element: <Dashboard />},
  {path:"perfil", element:<h1>perfil</h1>},
  {path:'*',element: <h1>not found</h1>}
];
let routes = [
  {path:"/", element: <h1>index page</h1>},
  {path:"/login", element: <Login />},
  {
    path:"/", 
    element: <Protected />, 
    children: renderSwitch(localStorageValidation)
  },
  {path:'*',element: <h1>not found</h1>}
];
function renderSwitch(role) {
  switch (role) {
    case "user":
      return rutasUsuario;
    case "admin":
      return adminRoutes;
    default:
      return [{path:"*", element: <Protected />}];
  };
};

export  function  Router() {
  let ruta = useRoutes(routes);
  return ruta;
};
