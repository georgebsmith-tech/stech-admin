import React from "react";
import { Link } from "react-router-dom";

export const AddNewProduct = () => {
  return (
    <div className="flex">
      <nav
        className="bg-primary1"
        style={{ width: "fit-content", height: "100vh", overflow: "auto" }}
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
            >
              <img src="/images/add.svg" />
              <span className="fg-white" style={{ marginLeft: 16 }}>
                Register member
              </span>
            </button>
          </div>
          <div style={{ border: "1px solid rgba(68, 74, 71, 1)" }} />
        </div>
        <NavSection />
        <NavSection />
        <NavSection />
      </nav>

      <main style={{ padding: "32px 75px", width: "100%" }}>
        <div
          style={{ marginBottom: 18 }}
          className="flex align-center pointer hover"
        >
          <img
            src="/images/back-circle.svg"
            style={{ marginRight: 16 }}
            className=""
          />
          <p className="fg-dark1 f20" style={{ fontWeight: "500" }}>
            Go back
          </p>
        </div>
        <section style={{ width: "100%" }}>
          <div className="bg-white" style={{ padding: "40px 32px" }}>
            <h1
              style={{
                marginBottom: 32,
                fontWeight: "700",
                color: "rgba(25, 32, 29, 1)",
              }}
              className="f20 font-std"
            >
              Add New Product
            </h1>
            <form>
              <section style={{ columnGap: 70 }} className="flex">
                <fieldset style={{ marginBottom: 32, flex: 1, border: "none" }}>
                  <label style={{ marginBottom: 8 }} className="block f14">
                    Product name
                  </label>
                  <input
                    type="text"
                    placeholder="Product name"
                    style={{
                      padding: "18px 24px",
                      border: "1px solid rgba(218, 223, 221, 1)",
                      width: "100%",
                    }}
                  />
                </fieldset>
                <div style={{ flex: 1 }}>
                  <label style={{ marginBottom: 8 }} className="block f14">
                    Category
                  </label>
                  <select
                    type="text"
                    placeholder="Product name"
                    style={{
                      padding: "18px 24px",
                      border: "1px solid rgba(218, 223, 221, 1)",
                      width: "100%",
                    }}
                  >
                    <option> Select category</option>
                  </select>
                </div>
              </section>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

const NavSection = () => (
  <section style={{ marginTop: 35 }}>
    <h2
      className="transform-upper f12 fg-grey5 font-std"
      style={{ padding: "0 32px" }}
    >
      main menu
    </h2>
    <ul style={{ marginTop: 17.33 }}>
      {[
        { page: "Dashboard", img: "dashboard-active.svg" },
        { page: "Manage Users", img: "manage-users-active.svg" },
        { page: "Wallet", img: "wallet-active.svg" },
      ].map((menu, idx) => (
        <li key={idx}>
          <Link
            to="/"
            style={{
              padding: "10px 32px",

              marginBottom: 4,
            }}
            className="flex align-center hover"
          >
            <img src={`/images/${menu.img}`} style={{ marginRight: 15.67 }} />
            <p className="fg-dark7 font-std">{menu.page}</p>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);
