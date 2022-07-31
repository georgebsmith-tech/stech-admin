import React, { useEffect, useState } from "react";
import { Button, Input, HardwareIntegration, RulesAndPermission } from "../..";
import { useSearchParams } from "react-router-dom";
import { getProtectedData } from "../../../utils/services/getServices";

export const SettingsContent = ({ location }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // setSearchParams({ hi: "yj" });

  const [activeTab, setActiveTab] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    (async function () {
      const data = await getProtectedData("/users/user", {}, token);
      console.log(data);
      setUser(data.user);
    })();
  }, []);
  return (
    <section>
      <nav>
        <ul className="flex" style={{ columnGap: 40 }}>
          {[{ tab: "Personal Details" }].map((tab, idx) => (
            <li
              onClick={() => setActiveTab(idx)}
              className={`hover pointer f16 fg-grey4 ${
                activeTab == idx ? "fw500" : "fw400"
              }`}
              style={{
                padding: "5px 5px 20px 0px",
                borderBottom: `2px solid ${
                  activeTab == idx ? "rgba(64, 145, 108, 1)" : "transparent"
                }`,
                color:
                  activeTab == idx
                    ? "rgba(64, 145, 108, 1)"
                    : "rgba(111, 121, 117, 1)"
              }}
            >
              {tab.tab}
            </li>
          ))}
        </ul>
      </nav>
      <PersonalDetails />
    </section>
  );
};

const PersonalDetails = ({ data }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    (async function () {
      const data = await getProtectedData("/users/user", {}, token);
      console.log(data);
      setUser(data.user);
    })();
  }, []);

  return (
    <>
      <section className="bg-white" style={{ padding: 24 }}>
        <header className="relative">
          <img src="/images/settings-header.svg" style={{ width: "100%" }} />
          <div
            className="bg-white"
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              position: "absolute",
              bottom: -75,
              left: "10%"
            }}
          >
            <img src="/images/avatar.svg" style={{ width: "100%" }} />
          </div>
        </header>
        <section style={{ marginTop: 50, padding: 71 }}>
          <div className="flex" style={{ columnGap: 29 }}>
            <Input
              placeholder="First Name"
              title="First Name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
            <Input
              placeholder="Last Name"
              title="Last Name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>

          <div className="flex" style={{ columnGap: 29 }}>
            <Input
              placeholder="brightbright@gmail.com"
              title="Email Address"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <Input
              placeholder="090 998 9898"
              title="Phone number"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </div>
          <div className="flex" style={{ columnGap: 29 }}>
            <Input placeholder="Select date" title="Date of Birth" />
            <Input
              placeholder="Select Gender"
              title="Gender"
              value={user.gender}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            />
          </div>
          <div className="flex justify-end" style={{ marginTop: 25 }}>
            <Button
              title="Save Details"
              btnStyles={{ padding: "17px 55px" }}
              classes="fg-white bg-grey1 br-4"
            />
          </div>
        </section>
      </section>
      <section style={{ marginTop: 24, padding: 32 }} className="bg-white">
        <header
          style={{
            paddingBottom: 21,
            borderBottom: "1px solid rgba(219, 226, 223, 1)",
            marginBottom: 34
          }}
        >
          <h2 className="fw500 f16 fg-grey1">Change Password</h2>
        </header>
        <div style={{ padding: "10px 63px" }}>
          <div className="flex justify-between" style={{}}>
            <Input
              placeholder="First Name"
              title="Old Password"
              containerStyle={{ flex: 0.485 }}
            />
            <Input
              placeholder="Last Name"
              title="New Password"
              containerStyle={{ flex: 0.485 }}
            />
          </div>

          <div className="flex" style={{ columnGap: 29 }}>
            <Input
              containerStyle={{ flex: 0.485 }}
              placeholder="brightbright@gmail.com"
              title="Confirm New Password"
            />
          </div>
          <div className="flex justify-end" style={{ marginTop: 40 }}>
            <Button
              title="Save Details"
              btnStyles={{ padding: "17px 55px" }}
              classes="fg-white bg-grey1 br-4"
            />
          </div>
        </div>
      </section>
    </>
  );
};
const CompanyDetails = () => {
  return (
    <>
      <section className="bg-white" style={{ padding: 24 }}>
        <header className="relative">
          <img src="/images/settings-header.svg" style={{ width: "100%" }} />
          <div
            className="bg-white"
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              position: "absolute",
              bottom: -75,
              left: "10%"
            }}
          >
            <img src="/images/avatar.svg" style={{ width: "100%" }} />
          </div>
        </header>
        <section style={{ marginTop: 50, padding: 71 }}>
          <div className="flex" style={{ columnGap: 29 }}>
            <Input placeholder="Company Name" title="Company Name" />
            <Input placeholder="brightbright@gmail.com" title="Email Address" />
          </div>

          <div className="flex" style={{ columnGap: 29 }}>
            <Input placeholder="090 998 9898" title="Phone number" />
            <Input placeholder="Enter address" title="Office Address" />
          </div>
          <div className="flex" style={{}}>
            <Input
              placeholder="www.company.com"
              title="Company website"
              containerStyle={{ flex: 0.485 }}
            />
          </div>
          <div className="flex justify-end" style={{ marginTop: 25 }}>
            <Button
              title="Save Details"
              btnStyles={{ padding: "17px 55px" }}
              classes="fg-white bg-grey1 br-4"
            />
          </div>
        </section>
      </section>
    </>
  );
};
