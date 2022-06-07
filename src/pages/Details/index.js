import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function Details() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const body = {
    email,
    password,
  };
  const notify = (message) => toast(message);

  function login() {
    if (!email || !password) {
      notify("Email and Password are required!");
    }
    console.log(body);
  }

  return (
    <section className="login">
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
      <section className="manage">
        <h3>Login to manage your company</h3>
      </section>
      <section className="formact">
        <div className="type">
          <p>Email Address</p>
          <input
            type="text"
            placeholder="hello@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="type pist">
          <p>Password</p>
          <div className="pistHold">
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <img src="./images/see.svg" />
          </div>
        </div>
        <div className="forgot">
          <p>
            Forgot Password?<span className="reset"> Reset</span>
          </p>
        </div>
        <div className="put" onClick={login}>
          <p>Log in</p>
        </div>
        <div className="new">
          <p>
            New to Gotru? <span className="reset"> Sign up</span>
          </p>
        </div>
        <div className="copy">
          <p>© 2022 Gotru. and Gotru logo are trademarks of the company.</p>
          <p className="white">
            Please visit our <span>Terms of service</span> for more details.
          </p>
        </div>
      </section>
    </section>
  );
}
