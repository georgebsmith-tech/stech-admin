import React from "react";

export const ProfileDetail = () => (
  <section
    role="profile-details"
    style={{
      marginTop: 46,
      borderBottom: "1px solid rgba(218, 223, 221, 1)",
      paddingBottom: 40,
    }}
  >
    <h2 className="f16 fg-dark1 font-std fw500">Profile Details</h2>
    <div
      style={{
        border: "1px solid rgba(213, 215, 228, 1)",
        padding: "31px 50px",
        marginTop: 32,
      }}
      className="br-8 flex"
    >
      <div
        className="flex-col align-center"
        style={{
          paddingRight: 72,
          width: "fit-content",
          borderRight: "1px solid rgba(213, 215, 228, 1)",
        }}
      >
        <div>
          <img src="/images/avatar.svg" />
        </div>

        <p className="f16 fg-grey1 fw700" style={{ marginBottom: 10 }}>
          Emmanuel Joseph
        </p>
        <p className="f12" style={{ backgroundColor: "#EDFFF7", padding: 3 }}>
          emanueljoeseph@gmail.com
        </p>
      </div>
      <section style={{ marginLeft: 72 }} className="flex-col justify-between">
        <ul className="flex flex-wrap" style={{ columnGap: "7vw", rowGap: 24 }}>
          <Li prty="Gender" value="Male" />
          <Li prty="Position/Role" value="None" />
          <Li prty="Personal ID" value="0000000000" />
        </ul>

        <ul className="flex flex-wrap" style={{ columnGap: "7vw", rowGap: 24 }}>
          <Li prty="Date of Birth" value="12, Jun 2000" />
          <Li prty="Date Joined" value="12, Jun 2021" />
        </ul>
      </section>
    </div>
  </section>
);

const Li = ({ prty, value }) => (
  <li>
    <h4 className="f12 fg-dark2" style={{ fontWeight: "400", marginBottom: 8 }}>
      {prty}
    </h4>
    <p className="fg-dark1 fw500">{value}</p>
  </li>
);
