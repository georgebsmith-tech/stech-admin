import React from "react";

export const Input = ({ title = "Product name", ...rest }) => (
  <fieldset style={{ marginBottom: 32, flex: 1, border: "none" }}>
    <label style={{ marginBottom: 8 }} className="block f14">
      {title}
    </label>
    <input
      type="text"
      style={{
        padding: "18px 24px",
        border: "1px solid rgba(218, 223, 221, 1)",
        width: "100%",
      }}
      {...rest}
    />
  </fieldset>
);
