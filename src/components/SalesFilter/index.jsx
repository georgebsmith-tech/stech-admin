import React, { useState } from "react";
import { Productflex } from "../Productflex";
import { EditTime } from "../EditTime";
import { ProductTable } from "../ProductTable";
import { SalesTable } from "../SalesTable";

export const SalesFilter = () => {
  const [isExpanded, setExpanded] = React.useState(true);
  const [isSales, setIsSales] = useState(true);

  const [editIsOpen, setEditIsOpen] = useState(false);
  const [edittimeModalIsOpen, setEdittimeModalIsOpen] = useState(false);

  const changeEditState = () => {
    setEditIsOpen(!editIsOpen);
  };
  return (
    <main>
      <section className="vertical">
        <section className="productholder">
          <div className="searchflexholds">
            <div className="searchflex">
              <h3>Product List</h3>
              <div className="searchinput">
                <div className="holdericon">
                  <img src="./images/searchicon.svg" />
                  <input
                    type="search"
                    placeholder={
                      "Search for items by name, category, manufacturer, "
                    }
                  ></input>
                </div>
              </div>
              <section className="filterholder">
                <div className="labelfilter">
                  <label>Filter date:</label>
                  <div className="to-fro">
                    <input type="date" placeholder="From" />
                    <input type="date" placeholder="To" />
                  </div>
                </div>
                <div className="threed">
                  <button>Print Report</button>
                  <div>
                    {editIsOpen && (
                      <EditTime changeModalState={setEdittimeModalIsOpen} />
                    )}
                    <button onClick={changeEditState}>
                      <img src="./images/3dots.svg"></img>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="producthead">
          <SalesTable />
        </section>
      </section>
    </main>
  );
};
