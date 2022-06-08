import React from "react";

export const OutOfStock = ({ flex }) => (
  <section className="bg-white" style={{ flex }}>
    <h2 style={{ padding: "40px 32px" }} className="f20 fw700 fg-grey1">
      Out Of Stock
    </h2>
    <table style={{ width: "100%" }}>
      <thead
        style={{ padding: "15px 32px", textAlign: "left" }}
        className="bg-dark6"
      >
        <th style={{ padding: "15px 32px" }} className="f14 fg-grey1 fw500">
          S/N
        </th>
        <th style={{ padding: "15px 0" }} className="f14 fg-grey1 fw500">
          product
        </th>
        <th style={{ padding: "15px 0" }} className="f14 fg-grey1 fw500">
          Rem.
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
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);
