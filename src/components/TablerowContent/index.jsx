import React from "react";
import { Tablerecords } from "../Tablerecords";

export const TablerowContent = () => {
  return (
    <>
      <tr>
        <Tablerecords
          day={"Thur, 18 Jun 2021"}
          timein={"09:33 am"}
          timeout={"09:33 am"}
          more={"more"}
          hours={"09:54 hr"}
        />
      </tr>
    </>
  );
};
