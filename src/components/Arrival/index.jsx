import React from "react";

export const Arrival = ({ inOut, outIn }) => {
  return (
    <section className="updatedClock">
      <div className="updatedClockHolder">
        <div className="timein">
          <div>
            <img src="./images/caution.svg" alt="logo" />
          </div>
          <div className="first-child">Clock in Time</div>
          <div className="timer">{inOut}</div>
        </div>

        <div className="timein">
          <div className="first-child">Updated Clock in Time</div>
          <div className="timer">{outIn}</div>
          <div>
            <img src="./images/chat.svg" />
          </div>
        </div>
        <div className="approved">
          <p>Approved by Precious</p>
        </div>
      </div>
    </section>
  );
};
