import React, { useContext, useState } from "react";
import { NavSection, RegisterUserModal } from "..";
import { Context } from "../../contexts";

export const MainNav = ({ setNotificationIsOpen }) => {
  const [userModalIsOpen, setUserModalIsOpen] = React.useState(false);
  const { navIsCollapsed, setNavIsCollaped } = useContext(Context);
  console.log(navIsCollapsed);
  const handleCollapseNav = () => {};
  return (
    <>
      {/* {userModalIsOpen && <RegisterUserModal closeModal={setUserModalIsOpen} />} */}
      <RegisterUserModal
        closeModal={setUserModalIsOpen}
        isOpen={userModalIsOpen}
      />
      <nav
        className="bg-primary1 animate-p6"
        style={{
          width: navIsCollapsed ? "fit-content" : 320,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <div style={{ padding: "48px 32px", width: "fit-content" }}>
          <div
            style={{ marginBottom: 48 }}
            className="justify-between flex align-center"
          >
            {navIsCollapsed ? (
              <img src="/images/logo-only.svg" />
            ) : (
              <img src="/images/logo-white.svg" />
            )}

            <img
              src="/images/harm-burger.svg"
              className="hover pointer"
              onClick={() => setNavIsCollaped(!navIsCollapsed)}
            />
          </div>
          <div className="flex" style={{ marginBottom: 48 }}>
            <button
              style={{
                padding: `21px ${navIsCollapsed ? 30 : 24}px`,
                border: "1px solid #fff",
              }}
              className="br-4 transparent center hover"
              onClick={() => setUserModalIsOpen(true)}
            >
              <img src="/images/add.svg" />
              {!navIsCollapsed && (
                <span
                  className="fg-white"
                  style={{ marginLeft: 16, whiteSpace: "nowrap" }}
                >
                  Register member
                </span>
              )}
            </button>
          </div>
          <div style={{ border: "1px solid rgba(68, 74, 71, 1)" }} />
        </div>
        <NavSection
          title="MAIN MENU"
          routes={[
            {
              page: "Dashboard",
              img: "dashboard-active.svg",
              link: "/dashboard",
            },
            {
              page: "Manage Users",
              img: "manage-users-active.svg",
              link: "/manage-users",
            },
            { page: "Wallet", img: "wallet-active.svg", link: "/wallet" },
          ]}
        />
        <NavSection
          title="REPORT"
          routes={[
            {
              page: "Attendance",
              img: "dashboard-active.svg",
              link: "/attendance",
            },
            {
              page: "Stocks Inventory",
              img: "manage-users-active.svg",
              link: "/stocks-inventory",
            },
          ]}
        />
        <NavSection
          title="PREFERENCES"
          routes={[
            {
              page: "Messaging",
              img: "dashboard-active.svg",
              link: "/messaging",
            },
            {
              page: "Notifications",
              img: "manage-users-active.svg",
              link: "/notifications",
              action: () => setNotificationIsOpen(true),
            },
            {
              page: "Settings",
              img: "manage-users-active.svg",
              link: "/settings",
            },
          ]}
        />
      </nav>
    </>
  );
};
