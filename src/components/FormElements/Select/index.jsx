import React from "react";

export const Select = () => (
  <fieldset style={{ flex: 1, border: "none" }}>
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
  </fieldset>
);
