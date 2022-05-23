import React from "react";
import { Routes, Route } from "react-router-dom";
import { routerConfig } from "../constants/routerConfig";

export const Content = () => {
  return (
    <Routes>
      {routerConfig.map((route) => (
        <Route path={route.path} element={route.component()} />
      ))}
    </Routes>
  );
};
