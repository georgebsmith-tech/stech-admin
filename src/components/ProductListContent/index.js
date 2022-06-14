import React from "react";
import { Link } from "react-router-dom";
import { ProductTable } from "../ProductTable";
import { Productflex } from "../Productflex";

export const ProductListContent = () => {
  return (
    <main>
      <Productflex />
      <section className="productrow">
        <section className="productholder">
          <div className="searchflexholds">
            <div className="searchflex">
              <h3>Product List</h3>
              <div className="searchinput">
                <div className="holdericon">
                  <img src="./images/searchicon.svg" />
                  <input
                    type="search"
                    placeholder="Search for items by name, category, manufacturer, "
                  ></input>
                </div>
              </div>
              <div className="sort">
                <label>Sort by :</label>
                <select>
                  <option>All</option>
                  <option>Buy</option>
                  <option>salesLink</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <section className="producthead">
          <ProductTable />
        </section>
      </section>
    </main>
  );
};
