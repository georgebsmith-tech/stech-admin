import React from "react";
import { SalesData } from "../SalesData";

export const SalesRow = ({ sn }) => {
  return (
    <tr>
      <SalesData
        sn={sn}
        date={"12, Jun 2011"}
        name={"Emeka Julius Favour"}
        department={"Deparment one"}
        product={"Bournvita chocolate"}
        quantity={900}
        unit={"Sachet"}
        uprice={"₦ 23,999.00"}
        amount={"₦ 123,999.00"}
        action={"More"}
      />
    </tr>
  );
};
