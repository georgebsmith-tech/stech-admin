import React from "react";
import { Link } from "react-router-dom";
import { Input, Select, MainNav } from "../../";

export const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      <MainNav />

      <main style={{ padding: "32px 75px", width: "100%" }}>{children}</main>
    </div>
  );
};
