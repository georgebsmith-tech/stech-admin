import logo from "./logo.svg";
import React from "react";
// import { Signin } from "./pages/Signin";
import {
  Dashbaord,
  AddNewProduct,
  Signin,
  RegisterMember,
  StocksInventory,
  AttendanceHistory,
  CustomerProfile,
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dash from "./pages/Dashboard";
import { Register } from "./components/FormElements/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="add-new-product" element={<AddNewProduct />} />
        <Route path="dashboard" element={<Dashbaord />} />
        <Route path="stocks-inventory" element={<StocksInventory />} />

        <Route path="attendance" element={<AttendanceHistory />} />
        <Route path="register-member" element={<RegisterMember />} />
        <Route path="customer-profile" element={<CustomerProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
