import React, { useEffect } from "react";
import { useState } from "react";
import { getProtectedData } from "../../utils/services/getServices";
import { getDate } from "../../utils/helpers/dateAndTime/getDate";
import { Button } from "../FormElements/Button";
import { postProtectedData } from "../../utils/services/postServices";

export const ProductSalesRecord = ({
  flex,
  members = [],
  title = "Recent Viewers",
  setMembers
}) => {
  const verifyAction = async (member, action) => {
    console.log("Verifying");
    const data = await postProtectedData(
      "/auth/verify-account/" + member._id,
      { activate: action },
      localStorage.getItem("token")
    );
    setMembers(
      members.map((item, idx) => (item._id == data.data._id ? data.data : item))
    );
  };
  return (
    <div style={{ width: "fit-content", overflowX: "auto" }}>
      <section className="bg-white" style={{ flex }}>
        <div
          style={{ padding: "40px 32px" }}
          className="flex justify-between align-center"
        >
          <h2 className="f20 fw700 fg-grey1">{title}</h2>
        </div>
        <div
          style={{
            display: members.length === 0 ? "block" : "none",

            width: "100%",
            // border: "3px solid red",
            padding: 40
          }}
          className="center"
        >
          <p className="f20" style={{ textAlign: "center" }}>
            There are no items
          </p>
        </div>
        <section
          style={{
            width: "100%",
            display: members.length === 0 ? "none" : "initial"
          }}
        >
          <ul
            style={{
              padding: "15px 32px",
              display: "grid",
              gridTemplateColumns: "0.2fr repeat(2,0.6fr) 1.5fr repeat(4,1fr)",
              columnGap: 20
            }}
            className="bg-dark6 flex align-center"
          >
            <li className="f14 fg-grey1 fw500">S/N</li>
            <li className="f14 fg-grey1 fw500">First Name</li>
            <li className="f14 fg-grey1 fw500">Last Name</li>
            <li className="f14 fg-grey1 fw500">Email</li>

            <li className="f14 fg-grey1 fw500"> Role</li>
            <li className="f14 fg-grey1 fw500">Date Joined</li>
            <li className="f14 fg-grey1 fw500">Status</li>
            <li className="f14 fg-grey1 fw500">Action</li>
          </ul>
          <div>
            {members.map((member, idx) => (
              <ul
                key={member._id}
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "0.2fr repeat(2,0.6fr) 1.5fr repeat(4,1fr)",
                  padding: "15px 32px",
                  columnGap: 20
                }}
                className="align-center"
              >
                <li
                  style={{
                    paddingTop: 12,
                    paddingBottom: 12
                  }}
                  className="fg-grey1"
                >
                  {idx * 1 + 1}
                </li>
                <li style={{}} className="fg-grey1">
                  {member.firstName}
                </li>
                <li style={{}} className="fg-grey1">
                  {member.lastName}
                </li>
                <li style={{}} className="fg-grey1">
                  {member.email}
                </li>
                <li style={{}} className="fg-grey1">
                  {member.role}
                </li>
                <li style={{}} className="fg-grey1">
                  {getDate(member.createdAt)}
                </li>
                <li style={{}} className="fg-grey1">
                  {member.isActivated ? "Verified" : "Not Verified"}
                </li>
                <li
                  style={{}}
                  className="fg-grey1 pointer"
                  onClick={() => console.log("clicked")}
                >
                  <Button
                    onClick={() => verifyAction(member, !member.isActivated)}
                    style={{
                      padding: "10px",
                      width: 100,
                      backgroundColor: member.isActivated
                        ? "rgba(255,12,0,0.7)"
                        : "#19201D",
                      color: "#fff",
                      fontWeight: "600"
                    }}
                    title={member.isActivated ? "Unverify" : "Verify"}
                  ></Button>
                </li>
              </ul>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};
