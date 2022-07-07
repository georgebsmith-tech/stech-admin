import React, { useState } from "react";

import { ConfigureUserTableModal, Table, ManageUserDropDown } from "../../";

export const ManageUsersContent = () => {
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [configureTableIsOpen, setConfigureTableIsOpen] = useState(false);

  const changeEditState = () => {
    setEditIsOpen(!editIsOpen);
  };

  return (
    <>
      <section className="regsec">
        <div className="dotholder">
          <h3>Register the ...</h3>
          <div className="threed">
            <button>Print Report</button>
            <div>
              {editIsOpen && (
                <ManageUserDropDown
                  setConfigureTableIsOpen={setConfigureTableIsOpen}
                />
              )}
              <button onClick={changeEditState}>
                <img src="./images/3dots.svg"></img>
              </button>
            </div>
          </div>
        </div>
        <div className="bottom"></div>

        <Table />

        <section className="next">
          <div className="backfront">
            <img src="./images/back.svg"></img>
            <p>1</p>
            <img src="./images/front.svg"></img>
          </div>
        </section>
      </section>
      <ConfigureUserTableModal
        isOpen={configureTableIsOpen}
        closeModal={setConfigureTableIsOpen}
      />
    </>
  );
};
