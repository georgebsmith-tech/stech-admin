import logo from "./logo.svg";
import React from "react";
// import { Signin } from "./pages/Signin";
import { Dashbaord, AddNewProduct, Signin, StocksInventory } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dash from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="add-new-product" element={<AddNewProduct />} />
        <Route path="dashboard" element={<Dashbaord />} />
        <Route path="stocks-inventory" element={<StocksInventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
