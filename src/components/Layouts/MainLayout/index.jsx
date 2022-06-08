import React from "react";
import { Link } from "react-router-dom";
import { Input, Select, MainNav } from "../../";

export const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      <MainNav />

      <main
        style={{
          padding: "32px 75px",
          width: "100%",
          height: "100vh",
          overflow: "auto",
        }}
      >
        {children}
      </main>
    </div>
  );
};
