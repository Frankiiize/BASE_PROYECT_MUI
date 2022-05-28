import React from "react";
import { Navigate, Outlet, Route, Routes, useRoutes } from "react-router-dom";
import Router from "./router";
import rutas from "./router";

export const RouteComponent = () => {
  console.log(rutas)
  let PublicRoutes = useRoutes(rutas)
  return PublicRoutes
}
