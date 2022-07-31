import React from "react";

// import { Signin } from "./pages/Signin";
import {
  Dashbaord,
  Signin,
  CustomerProfile,
  ManageUsers,
  Settings,
  Reports
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CustomerReport } from "./components";
import { SalesModal } from "./components/modals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}></Route>

        <Route path="dashboard" element={<Dashbaord />} />

        <Route path="sales-modal" element={<SalesModal />} />
        <Route path="reports" element={<Reports />} />

        <Route path="customer-report" element={<CustomerReport />} />
        <Route path="customer-profile" element={<CustomerProfile />} />
        <Route path="manage-users" element={<ManageUsers />} />

        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
