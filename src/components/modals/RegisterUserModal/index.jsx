import React, { useState, useRef } from "react";
import { Input } from "../..";
import toast, { Toaster } from "react-hot-toast";
export const RegisterUserModal = ({ closeModal, isOpen }) => {
  const [hideCalender, setHideCalender] = useState(false);
  const calenderRef = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  const user = {
    firstName,
    lastName,
    idNumber,
    phone,
    email,
    gender,
    dateOfBirth: date,
  };

  console.log(user);
  const notify = (message) => toast(message);

  async function register() {
    if (
      !firstName ||
      !lastName ||
      !idNumber ||
      !phone ||
      !email ||
      !gender ||
      !date
    ) {
      notify("All Fields Are Required");
    }

    const response = await fetch(
      "https://gotruhub-api.herokuapp.com/api/v1/auth/members",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json" },
      }
    );

    const data = await response.json();
    if (data.error) {
      notify(data.error.message);
      return;
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setIdNumber("");
    setDate("");
    setGender("");
    setPhone("");

    closeModal(false);
    // notify("Registration Successful");

    console.log(data);
  }

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
          <Toaster
            toastOptions={{
              className: "",
              style: {
                border: "1px solid rgba(145, 64, 64, 1)",
                padding: "16px",
                color: "rgba(145, 64, 64, 1)",
              },
            }}
          />
          <div className="mana">
            <h4>Register user</h4>
            <button onClick={() => closeModal(false)} className="bad">
              <img src="./images/bad.svg" />
            </button>
          </div>
        </div>
        <div className="gridfive" style={{ columnGap: 55 }}>
          <Input
            title="First Name"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <Input
            title="Last Name"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <Input
            title="ID Number"
            placeholder="Enter ID Number"
            value={idNumber}
            onChange={(e) => {
              setIdNumber(e.target.value);
            }}
          />
          <Input
            title="Email address"
            placeholder=" Enter Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            title="Phone Number"
            placeholder="Enter Phone number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <div className="gender">
            <Input
              title="Gender"
              placeholder="Select Gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
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
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />

                <img src="./images/calendar.svg" />
              </div>
            </div>
          </div>
        </div>

        <section className="cancelbuttons">
          <div className="canceluser">
            <button>Cancel</button>
            <button onClick={register}>Register User</button>
          </div>
        </section>
      </div>
    </div>
  );
};
