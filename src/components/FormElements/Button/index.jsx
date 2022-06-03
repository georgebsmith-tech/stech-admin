import React from "react";

export const Button = ({
  classes = "fg-grey1 transparent",
  title = "action",
}) => (
  <button
    style={{ padding: "16px 30px" }}
    className={"br-8 font-std bd-grey4 hover f14 " + classes}
  >
    {title}
  </button>
);
