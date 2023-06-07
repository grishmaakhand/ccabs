import React from "react";
import AllItems from "../molecules/AllItems";
import Home from "../pages/Home";
import TripManagement from "../pages/Tripmanagement";
import DriverManagement from "../pages/Drivermanagement";
import EmployeesManagement from "../pages/EmployeesManagement";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <BrowserRouter>
        <AllItems />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tripmanagement" element={<TripManagement />} />
          <Route path="/drivermanagement" element={<DriverManagement />} />
          <Route
            path="/employeesmanagement"
            element={<EmployeesManagement />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default SideBar;
