import { Link } from "react-router-dom";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/services/postServices";
export default function Details({}) {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [encrypted, setEncrypted] = useState(true);

  const body = {
    email,
    password
  };
  console.log(body);
  const notify = (message) => toast(message);

  async function login() {
    try {
      if (!email || !password) {
        notify("Email and Password are required!");
        return;
      }
      const data = await postData("/auth/login", body);

      if (data.error) {
        notify(data.error.message);
        return;
      }

      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      notify(error.error.message);
      return;
    }
  }

  return (
    <section className="login">
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid rgba(145, 64, 64, 1)",
            padding: "16px",
            color: "rgba(145, 64, 64, 1)"
          }
        }}
      />
      <section className="manage">
        <h3>Login to manage Hospitals and School staff</h3>
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
          <label>Password</label>
          <div className="pistHold">
            <input
              type={encrypted ? "password" : "text"}
              placeholder="Your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            {!encrypted ? (
              <img
                src="./images/see.svg"
                onClick={() => setEncrypted(!encrypted)}
              />
            ) : (
              <img
                src="./images/encrypt.svg"
                onClick={() => setEncrypted(!encrypted)}
              />
            )}
          </div>
        </div>
        <div className="forgot">
          <p>
            Forgot Password?
            <Link to="/reset-password" className="reset">
              Reset
            </Link>
          </p>
        </div>

        <button className="puts put" onClick={login}>
          Log in
        </button>

        <div className="copy">
          <p>© 2022 Stech</p>
          <p className="white">
            Please visit our <span>Terms of service</span> for more details.
          </p>
        </div>
      </section>
    </section>
  );
}
