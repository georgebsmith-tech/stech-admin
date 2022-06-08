import React from "react";
import { NavSection, RegisterUserModal } from "..";

export const MainNav = () => {
  const [userModalIsOpen, setUserModalIsOpen] = React.useState(false);
  return (
    <>
      {/* {userModalIsOpen && <RegisterUserModal closeModal={setUserModalIsOpen} />} */}
      <RegisterUserModal
        closeModal={setUserModalIsOpen}
        isOpen={userModalIsOpen}
      />
      <nav
        className="bg-primary1"
        style={{ width: 320, height: "100vh", overflow: "auto" }}
      >
        <div style={{ padding: "48px 32px", width: "fit-content" }}>
          <div
            style={{ marginBottom: 48 }}
            className="justify-between flex align-center"
          >
            <img src="/images/logo-white.svg" />
            <img src="/images/harm-burger.svg" className="hover pointer" />
          </div>
          <div className="flex" style={{ marginBottom: 48 }}>
            <button
              style={{ padding: "21px 24px", border: "1px solid #fff" }}
              className="br-4 transparent center hover"
              onClick={() => setUserModalIsOpen(true)}
            >
              <img src="/images/add.svg" />
              <span className="fg-white" style={{ marginLeft: 16 }}>
                Register member
              </span>
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
              link: "/stocks-inventory",
            },
            {
              page: "Settings",
              img: "manage-users-active.svg",
              link: "/stocks-inventory",
            },
          ]}
        />
      </nav>
    </>
  );
};
