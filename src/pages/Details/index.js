import React from "react";
import { Link } from "react-router-dom";

export default function Details() {
  return (
    <section className="login">
      <section className="manage">
        <h3>Login to manage your company</h3>
      </section>
      <section className="formact">
        <div className="type">
          <label>Email Address</label>
          <input type="text" placeholder="hello@company.com"></input>
        </div>

        <div className="type pist">
          <label>Password</label>
          <div className="pistHold">
            <input type="password" placeholder="Your Password"></input>
            <img src="./images/see.svg" />
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
        <button className="puts">
          <p>Log in</p>
        </button>
        <div className="new">
          <p>
            New to Gotru?
            <Link to="/sign-up" className="reset">
              Sign up
            </Link>
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
