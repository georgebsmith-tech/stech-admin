import React from "react";

export const ManageUserDropDown = ({ setConfigureTableIsOpen }) => {
  return (
    <section className="editback">
      <div className="editimg">
        <div
          className="editsv hover"
          onClick={() => setConfigureTableIsOpen(true)}
        >
          <img src="./images/edition.svg" />
          <h6>Configure Table</h6>
        </div>
        <div className="editsv hover">
          <img src="./images/printrep.svg" />
          <h6>Print Report</h6>
        </div>
        <div className="editsv hover">
          <img src="./images/printrep.svg" />
          <h6>Import Sheet</h6>
        </div>
        <div className="editsv hover">
          <img src="./images/printrep.svg" />
          <h6>Add member</h6>
        </div>
      </div>
    </section>
  );
};
