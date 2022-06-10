import React from "react";
import { TablerowContent } from "../TablerowContent";

export const AttendanceHistoryContent = () => {
  return (
    <section>
      <img src="./images/go.svg" />
      <section className="customer">
        <div className="bton">
          <h3>Emmanuel Joseph’s Timesheet</h3>
          <div className="ttons">
            <button>Customer Records</button>
            <button>Resend Password</button>
          </div>
        </div>

        <section className="ava">
          <div className="twoholds">
            <div className="tar">
              <div className="avaimg">
                <img src="./images/avatarnose.svg" />
              </div>
              <div className="tionHold">
                <h4>Emmanuel Joseph</h4>
                <h6>Director Business admin</h6>
              </div>
            </div>
            <div className="backback">
              <button>
                <div>
                  <img src="./images/previous.svg" />
                  <p> July, 2021</p>
                  <img src="./images/forward.svg" />
                </div>
              </button>
            </div>
          </div>
        </section>
      </section>

      <section className="attendanceHour">
        <div className="avgTime">
          <div className="absent">
            <div className="allMG">
              <h3>08:08</h3>
              <p>Avg clock in</p>
            </div>
            <div className="leftBD rightMG allMG">
              <h3>08:09</h3>
              <p>Avg clock out</p>
            </div>
            <div className="leftBD rightMG allMG">
              <h3>8h 20m</h3>
              <p>Avg attandance hour</p>
            </div>
            <div className="rightMG allMG leftBD">
              <h3>05</h3>
              <p>Absent/Leaves</p>
            </div>
          </div>
        </div>
        <section className="datatable">
          <table>
            <thead>
              <th>Date</th>
              <th>Clock in</th>
              <th>Clock out</th>
              <th>Working hours</th>
              <th>Action</th>
            </thead>

            <tbody>
              <TablerowContent />
            </tbody>
          </table>
        </section>
      </section>
    </section>
  );
};
