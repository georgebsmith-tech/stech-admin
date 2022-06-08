import React from "react";

export const Tablerecords = ({ day, timein, timeout, more, hours }) => {
  return (
    <>
      <td>{day}</td>
      <td>{timein}</td>
      <td>{timeout}</td>
      <td>{hours}</td>
      <td>
        <button>{more}</button>
      </td>
    </>
  );
};
