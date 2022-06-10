import React, { useState, useRef } from "react";
import { Input } from "../..";
export const RegisterUserModal = ({ closeModal, isOpen }) => {
  const [hideCalender, setHideCalender] = useState(false);
  const calenderRef = useRef();

  console.log(calenderRef);

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        display: isOpen ? "flex" : "none",
      }}
      className="center z"
      onClick={() => closeModal(false)}
    >
      <div
        style={{ width: 999 }}
        className="bg-white z "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="managemodal">
          <div className="mana">
            <h4>Register user</h4>
            <button onClick={() => closeModal(false)} className="bad">
              <img src="./images/bad.svg" />
            </button>
          </div>
        </div>
        <div className="gridfive" style={{ columnGap: 55 }}>
          <Input title="First Name" placeholder="Enter First Name" />
          <Input title="Last Name" placeholder="Enter Last Name" />
          <Input title="ID Number" placeholder="Enter ID Number" />
          <Input title="Email address" placeholder=" Enter Email address" />
          <Input title="Phone Number" placeholder="Enter Phone number" />
          <div className="gender">
            <Input title="Gender" placeholder="Select Gender" />
            <div>
              <label>Date</label>
              <div
                className="calendaricon pointer hover"
                onClick={() => {
                  calenderRef.current?.focus();
                  calenderRef.current?.click();
                }}
              >
                {/* <input type="date" placeholder="Select Date" /> */}

                <input
                  type="date"
                  placeholder="Select Date"
                  // className="hide"
                  ref={calenderRef}
                />

                <img src="./images/calendar.svg" />
              </div>
            </div>
          </div>
        </div>

        <section className="cancelbuttons">
          <div className="canceluser">
            <button>Cancel</button>
            <button>Register User</button>
          </div>
        </section>
      </div>
    </div>
  );
};
