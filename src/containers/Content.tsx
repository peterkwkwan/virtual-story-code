import React from "react";
import { Routes, Route } from "react-router-dom";
import { routerConfig } from "../shared/routerConfig";

export const Content = () => {
  return (
    <Routes>
      {routerConfig.map((route) => (
        <Route key={route.path} path={route.path} element={route.component()} />
      ))}
    </Routes>
  );
};
