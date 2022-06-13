import React from "react";
import { Link } from "react-router-dom";

export const Productflex = () => {
  return (
    <section className="productflex">
      <div className="salesLink">
        <div className="sales">
          <Link to="/">ProductList</Link>
        </div>
        <div className="sales">
          <Link to="/">Sales Register</Link>
        </div>
      </div>
      <div>
        <button className="addProduct">
          <div className="product">
            <div>
              <img src="./images/plusSign.svg" />
            </div>
            <p> Add new product</p>
          </div>
        </button>
      </div>
    </section>
  );
};
