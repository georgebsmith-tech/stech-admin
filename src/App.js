import logo from "./logo.svg";
import React from "react";
// import { Signin } from "./pages/Signin";
import {
  Dashbaord,
  Signin,
  AttendanceHistory,
  StocksInventory,
  Attendance,
  CustomerProfile,
  ManageUsers,
  Messaging,
  ProductList,
  NewService,
  Notifications,
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NewServiceBox } from "./pages/NewServiceBox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}></Route>

        <Route path="dashboard" element={<Dashbaord />} />
        <Route path="stocks-inventory" element={<StocksInventory />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="new-service" element={<NewService />} />
        <Route path="new-service-box" element={<NewServiceBox />} />

        <Route path="attendance-history" element={<AttendanceHistory />} />

        <Route path="customer-profile" element={<CustomerProfile />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="messaging" element={<Messaging />} />
        <Route path="notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
