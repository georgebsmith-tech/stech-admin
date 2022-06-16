import React from "react";
import { Link } from "react-router-dom";

export const NavSection = ({ title, routes = [] }) => (
  <section style={{ marginTop: 35 }}>
    <h2
      className="transform-upper f12 fg-grey5 font-std"
      style={{ padding: "0 32px" }}
    >
      {title}
    </h2>
    <ul style={{ marginTop: 17.33 }}>
      {routes.map((menu, idx) => (
        <li key={idx}>
          <Link
            onClick={(e) => {
              if (menu.action) {
                e.preventDefault();
                menu.action();
              }
            }}
            to={menu.link}
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
