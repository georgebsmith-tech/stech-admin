import React from "react";

export const Identity = ({
  sn,
  names,
  remark,
  depart,
  contact,
  view,
  percent,
}) => {
  return (
    <>
      <td>{sn}</td>
      <td>{names}</td>

      <td>{percent}</td>
      <td>{remark}</td>
      <td>{depart}</td>
      <td>{contact}</td>
      <td>
        <button>{view}</button>
      </td>
    </>
  );
};
