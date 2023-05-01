import React from "react";
import { Routes, Route } from "react-router-dom";
import { PATH_NAME } from "./PathName";
import Home from "../Component/Pages/Home/Home";
import Auth from "../Component/Pages/Auth";

import Dashboard from "../Component/Pages/Dashboard/Dashboard";
import ShipmentSummary from "../Component/Pages/ShipmentSummary/ShipmentSummary";
import Login from "../Component/Pages/Auth/Login";


export default function AllRoutes() {
  return (
    <Routes>
       <Route exact path={PATH_NAME.ROOT} element={<Home />} /> 
      <Route path={PATH_NAME.LOGIN} element={<Auth />} />
      
      <Route element={<Home />}>
        <Route path={PATH_NAME.DASHBOARD} element={<Dashboard />} />
        <Route path={PATH_NAME.SHIPMENT_SUMMARY} element={<ShipmentSummary />} />
      </Route>

    </Routes>
  );
}
