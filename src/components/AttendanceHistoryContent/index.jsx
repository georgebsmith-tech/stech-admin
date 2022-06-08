import React from "react";

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
    </section>
  );
};
