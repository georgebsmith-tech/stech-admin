import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SalesRegister } from "..";

export const Productflex = ({ setExpanded, isExpanded, setToggle, toggle }) => {
  return (
    <section className="productflex">
      <div className="salesLink">
        <div
          onClick={() => setToggle("productlist")}
          className={
            toggle === "productlist" ? "hovergreen pointer" : "pointer sales"
          }
        >
          ProductList
        </div>
        <div
          onClick={() => setToggle("salesregister")}
          className={
            toggle === "salesregister" ? "pointer hovergreen" : "sales pointer"
          }
        >
          Sales Register
        </div>
      </div>
      <div>
        {isExpanded ? (
          <button
            className="addProduct"
            onClick={() => setExpanded(!isExpanded)}
          >
            <div className="product">
              <div>
                <img src="./images/plusSign.svg" />
              </div>
              <p> Add new product</p>
            </div>
          </button>
        ) : (
          <button
            className="addProduct"
            onClick={() => setExpanded(!isExpanded)}
          >
            <div className="products">
              <div>
                <img src="./images/expand.svg" />
              </div>
              <p> Expand</p>
            </div>
          </button>
        )}
      </div>
    </section>
  );
};
