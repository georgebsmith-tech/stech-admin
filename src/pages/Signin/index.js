import React from "react";
import Details from "../Details";

export const Signin = () => {
  return (
    <main className="firstmain">
      <section className="secmain">
        <div className="naviHold">
          <nav className="logoHold">
            <h1 className="fg-white" style={{ fontSize: 40 }}>
              Stech
            </h1>
          </nav>
        </div>
        <Details />
      </section>
    </main>
  );
};
