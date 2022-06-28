import React from "react";
import { DeskRow } from "../DeskRow";

export const DeskModeContent = () => {
  return (
    <main>
      <section className="deskgrid">
        <section className="deskgridOne">
          <div className="deskgridProduct">
            <h3>Product List</h3>
            <div className="deskdiv">
              <div className="deskModeSort">
                <label>Sort:</label>
                <div className="desktop">
                  <p>Top to bottom</p>
                  <div>
                    <img src="./images/sort.svg" />
                  </div>
                </div>
              </div>
              <div className="desksearch">
                <div className="desksearchItems">
                  <img src="./images/searchicon.svg" />
                  <input type="search" placeholder={"Search for item "}></input>
                </div>
              </div>
            </div>
          </div>
          <table>
            <thead>
              <th>S/N</th>
              <th>Category</th>
              <th>Product</th>
              <th>Avail. Qty</th>
              <th>Selling Price</th>
              <th>Qty to purchase</th>
              <th>Action</th>
            </thead>
            <tbody>
              {[2, 4, 6, 4, 5, 6, 2, 4, 1].map((item, idx) => (
                <DeskRow sn={idx * 1 + 1} />
              ))}
            </tbody>
          </table>
        </section>
        <section></section>
      </section>
    </main>
  );
};
