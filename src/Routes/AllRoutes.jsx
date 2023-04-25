import React from "react";
import { Routes, Route} from "react-router-dom";
import { PATH_NAME } from "./PathName";
import Login from "../Component/Pages/Auth/Login";

import Home from "../Component/Pages/Home/Home";


export default function AllRoutes() {
  return (
    <Routes>
      <Route exact path={PATH_NAME.ROOT} element={<Home />} />
      <Route path={PATH_NAME.LOGIN} element={<Login />} />
      <Route element={<Home />}>
       
      </Route>
    </Routes>
  );
}
