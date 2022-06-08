import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sequence } from "../Sequence";
import { EditTime } from "../EditTime";

export const ManageUsersContent = () => {
  const [editIsOpen, setEditIsOpen] = useState(false);

  const changeEditState = () => {
    setEditIsOpen(!editIsOpen);
  };

  return (
    <section className="regsec">
      <div className="dotholder">
        <h3>Attendance Register</h3>
        <div className="threed">
          <button>Print Report</button>
          <div>
            {editIsOpen && <EditTime />}
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
          <th>Name</th>
          {/* </div> */}
          {/* <div className="remark"> */}
          <th>Attendace </th>
          <th>Remark</th>
          <th>Department head</th>
          <th>Dept head’s contact</th>
          <th>Action</th>
          {/* </div> */}
        </thead>
        <tbody className="tbt">
          <Sequence />

          <Sequence />

          <Sequence />

          <Sequence />
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
  );
};
