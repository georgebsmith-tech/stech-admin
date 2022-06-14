import React from "react";
import { Link } from "react-router-dom";
import { MainNav, NotificationsWrapper } from "../../";

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
        {/* <NotificationsWrapper /> */}
      </main>
    </div>
  );
};
