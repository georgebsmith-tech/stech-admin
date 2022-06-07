import logo from "./logo.svg";
import React from "react";
// import { Signin } from "./pages/Signin";
import {
  Dashbaord,
  AddNewProduct,
  Signin,
  AttendanceHistory,
  StocksInventory,
  Attendance,
  CustomerProfile,
  ManageUsers,
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dash from "./pages/Dashboard";
import { Register } from "./components/AttendanceContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="add-new-product" element={<AddNewProduct />} />
        <Route path="dashboard" element={<Dashbaord />} />
        <Route path="stocks-inventory" element={<StocksInventory />} />
        <Route path="attendance" element={<Attendance />} />

        <Route path="attendance-history" element={<AttendanceHistory />} />

        <Route path="customer-profile" element={<CustomerProfile />} />
        <Route path="manage-users" element={<ManageUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
