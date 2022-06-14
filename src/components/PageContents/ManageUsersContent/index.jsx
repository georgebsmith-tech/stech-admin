import React, { useState } from "react";

import { ManageUserDropDown } from "../../";
import { ConfigureUserTableModal } from "../../";

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

        <table className="tsec">
          <thead className="headings">
            {/* <div className="serial"> */}
            <th>S/N</th>
            <th>Name of user</th>
            {/* </div> */}
            {/* <div className="remark"> */}
            <th>Date Joined </th>
            <th>Class/Department</th>
            <th>Level</th>
            <th>Attendance</th>
            <th>Total Spent</th>
            <th>Action</th>

            {/* </div> */}
          </thead>
          <tbody className="tbt">
            {[1, 2, 3, 4, 4, 5, 3, 53, 4, 5].map((user, idx) => (
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
                  Emeka Julius Favour
                </td>
                <td
                  style={{
                    paddingTop: 12,

                    paddingBottom: 12,
                  }}
                  className="fg-grey1"
                >
                  12, Jun 2011
                </td>
                <td
                  style={{
                    paddingTop: 12,

                    paddingBottom: 12,
                  }}
                  className="fg-grey1"
                >
                  Deparment one
                </td>
                <td
                  style={{
                    paddingTop: 12,

                    paddingBottom: 12,
                  }}
                  className="fg-grey1"
                >
                  Senior
                </td>
                <td
                  style={{
                    paddingTop: 12,

                    paddingBottom: 12,
                  }}
                  className="fg-grey1"
                >
                  90/100
                </td>
                <td
                  style={{
                    paddingTop: 12,

                    paddingBottom: 12,
                  }}
                  className="fg-grey1"
                >
                  ₦ 23,999.00
                </td>
                <td
                  style={{
                    paddingTop: 12,

                    paddingBottom: 12,
                  }}
                  className=""
                >
                  <span
                    className="fg-white bg-grey1 center br-4 f14"
                    style={{ padding: "6px 14px" }}
                  >
                    More
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
