import React from "react";
export const SuspensionModal = ({
  closeModal,
  isOpen,
  setIsSuspended,
  isSuspended,
}) => (
  <div
    style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      top: 0,
      left: 0,
      display: isOpen ? "flex" : "none",
    }}
    className="center z"
    onClick={() => closeModal(false)}
  >
    <div
      style={{ width: 999, height: 604 }}
      className="bg-white z "
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="managemodal">
        <div className="mana">
          <h3>Suspension</h3>
          <button onClick={() => closeModal(false)} className="bad">
            <img src="./images/bad.svg" />
          </button>
        </div>
      </div>

      <section className="suspendgrid">
        <div className="suspendEmployee">
          <h3>Suspend Employee</h3>
          <p style={{ whiteSpace: "normal" }}>
            Are you sure you want to edit this time? Editing this time means the
            employee’s time in and time out would be modified and it would
            affect when they get to work.
          </p>
        </div>
        <div>
          <div className="suspendtext">
            <h5 className="namefive">Reason for suspensions</h5>
            <textarea
              cols="50"
              rows="5"
              placeholder="Enter you reason for the time edit"
            ></textarea>
          </div>
          <div className="timeholds">
            <div>
              <h5 className="namefive">Start Date</h5>
              <div className="clock">
                <input type="text" placeholder="Select date" />
                <img src="./images/clock.svg" />
              </div>
            </div>
            <div>
              <h5 className="namefive">End Date</h5>
              <div className="clock">
                <input type="date" placeholder="Select date" />
                <img src="./images/calendar.svg" />
              </div>
            </div>
          </div>
          <div className="changetime">
            <button
              onClick={() => {
                setIsSuspended(!isSuspended);
              }}
            >
              Confirm suspension
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
);
