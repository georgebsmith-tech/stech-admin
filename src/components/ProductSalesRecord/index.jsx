import React, { useEffect } from "react";
import { useState } from "react";
import { getProtectedData } from "../../utils/services/getServices";

export const ProductSalesRecord = ({ flex }) => {
  const [products, setproducts] = useState([1, 2, 3, 4, 5, 6]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getData() {
      const data = await getProtectedData("/products", {}, token);
      console.log(data);
    }
    getData();
  }, []);

  return (
    <section className="bg-white" style={{ flex }}>
      <div
        style={{ padding: "40px 32px" }}
        className="flex justify-between align-center"
      >
        <h2 className="f20 fw700 fg-grey1">Latest Members</h2>
      </div>
      <div
        style={{
          display: products.length === 0 ? "block" : "none",

          width: "100%",
          // border: "3px solid red",
          padding: 40
        }}
        className="center"
      >
        <p className="f20" style={{ textAlign: "center" }}>
          There are no items
        </p>
      </div>
      <section
        style={{
          width: "100%",
          display: products.length === 0 ? "none" : "initial"
        }}
      >
        <ul
          style={{
            padding: "15px 32px",
            display: "grid",
            gridTemplateColumns: "0.4fr repeat(4,1fr)"
          }}
          className="bg-dark6 flex"
        >
          <li className="f14 fg-grey1 fw500">S/N</li>
          <li className="f14 fg-grey1 fw500">Name</li>
          <li className="f14 fg-grey1 fw500">Email</li>

          <li className="f14 fg-grey1 fw500"> Role</li>
          <li className="f14 fg-grey1 fw500">Status</li>
        </ul>
        <div>
          {products.map((row, idx) => (
            <ul
              key={idx}
              style={{
                display: "grid",
                gridTemplateColumns: "0.4fr repeat(4,1fr)",
                padding: "15px 32px"
              }}
            >
              <li
                style={{
                  paddingTop: 12,
                  paddingBottom: 12
                }}
                className="fg-grey1"
              >
                {idx * 1 + 1}
              </li>
              <li style={{}} className="fg-grey1">
                Jame John
              </li>
              <li style={{}} className="fg-grey1">
                smith@gmail.com
              </li>
              <li style={{}} className="fg-grey1">
                Doctor
              </li>
              <li style={{}} className="fg-grey1">
                Activated
              </li>
            </ul>
          ))}
        </div>
      </section>
    </section>
  );
};
