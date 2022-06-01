import React from "react";

export default function Details() {
  return (
    <section className="login">
      <section className="manage">
        <h3>Login to manage your company</h3>
      </section>
      <section className="formact">
        <div className="type">
          <p>Email Address</p>
          <input type="text" placeholder="hello@company.com"></input>
        </div>

        <div className="type pist">
          <p>Password</p>
          <div className="pistHold">
            <input type="password" placeholder="Your Password"></input>
            <img src="./images/see.svg" />
          </div>
        </div>
        <div className="forgot">
          <p>
            Forgot Password?<span className="reset"> Reset</span>
          </p>
        </div>
        <div className="put">
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
