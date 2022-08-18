import React, { useEffect, useState } from "react";

import { MainLayout, ProductSalesRecord } from "../../components";
import { getDate } from "../../utils/helpers/dateAndTime/getDate";
import { getProtectedData } from "../../utils/services/getServices";

export const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getData() {
      const data = await getProtectedData("/reports", {}, token);
      console.log(data);

      setReports(data.data.reports);
    }
    getData();
  }, []);
  return (
    <MainLayout>
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          padding: 20,
          borderRadius: 10
        }}
      >
        <h2>Reports</h2>
        <ul className="" style={itemGrid}>
          {[
            "S/N",
            "Made by",

            "Phone",
            "Stud. Name",
            "Stud. Dept.",
            "Stud. MatNo.",
            "Report",
            "Date"
          ].map((item, idx) => (
            <li key={idx} style={{ padding: 10 }}>
              {item}
            </li>
          ))}
        </ul>
        <ul style={{ marginTop: 20 }}>
          {reports.map((report, idx) => (
            <li key={idx}>
              <ul className="flex" style={{ ...itemGrid }}>
                <li style={{ padding: 10 }}>{idx + 1}</li>
                <li
                  style={{ padding: 10 }}
                >{`${report?.addedBy?.firstName} ${report?.addedBy?.lastName}`}</li>
                <li style={{ padding: 10 }}>{`${report?.addedBy?.phone}`}</li>
                <li style={{ padding: 10 }}>{`${report?.student?.name}`}</li>
                <li style={{ padding: 10 }}>{`${report?.student?.dept}`}</li>
                <li style={{ padding: 10 }}>{`${report?.student?.matNo}`}</li>
                <li style={{ padding: 10 }}>{`${report?.report}`}</li>
                <li style={{ padding: 10 }}>{`${getDate(
                  report?.createdAt
                )}`}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
};

const itemGrid = {
  display: "grid",
  gridTemplateColumns: "0.3fr 1.3fr repeat(4,1fr) 1.5fr 0.7fr"
};
