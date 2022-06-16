import React from "react";

export const SalesData = ({
  sn,
  date,
  name,
  department,
  product,
  quantity,
  unit,
  uprice,
  amount,
  action,
}) => {
  return (
    <>
      <td>{sn}</td>
      <td>{date}</td>
      <td>{name}</td>
      <td>{department}</td>
      <td>{product}</td>
      <td>{quantity}</td>
      <td>{unit}</td>
      <td>{uprice}</td>
      <td>{amount}</td>
      <td>
        <button>{action}</button>
      </td>
    </>
  );
};
