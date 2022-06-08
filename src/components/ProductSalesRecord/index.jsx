import React from "react";

export const ProductSalesRecord = ({ flex }) => (
  <section className="bg-white" style={{ flex }}>
    <div
      style={{ padding: "40px 32px" }}
      className="flex justify-between align-center"
    >
      <h2 className="f20 fw700 fg-grey1">Product Sales Record</h2>
      <div>
        <span className="f14 fg-grey1">Sort:</span>
        <select
          style={{ border: "none", marginLeft: 5, display: "inline-block" }}
        >
          <option className="f14 fg-grey1">Bottom to Top</option>
          <option className="f14 fg-grey1">Bottom to Top</option>
        </select>
      </div>
    </div>
    <table style={{ width: "100%" }}>
      <thead
        style={{ padding: "15px 32px", textAlign: "left" }}
        className="bg-dark6"
      >
        <th style={{ padding: "15px 32px" }} className="f14 fg-grey1 fw500">
          S/N
        </th>
        <th style={{ padding: "15px 0" }} className="f14 fg-grey1 fw500">
          Product
        </th>
        <th style={{ padding: "15px 0" }} className="f14 fg-grey1 fw500">
          Total Sales
        </th>

        <th style={{ padding: "15px 0" }} className="f14 fg-grey1 fw500">
          {" "}
          Income.
        </th>
      </thead>
      <tbody>
        {[1, 2, 3, 4, 5, 6, 6, 7, 8, 8].map((row, idx) => (
          <tr key={idx}>
            <td
              style={{
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 32,
              }}
              className="fg-grey1"
            >
              {idx * 1 + 1}
            </td>
            <td
              style={{
                paddingTop: 12,

                paddingBottom: 12,
              }}
              className="fg-grey1"
            >
              Chocolate
            </td>
            <td
              style={{
                paddingTop: 12,

                paddingBottom: 12,
              }}
              className="fg-grey1"
            >
              200
            </td>
            <td
              style={{
                paddingTop: 12,

                paddingBottom: 12,
              }}
              className="fg-grey1"
            >
              N 123,098,09.00
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);
