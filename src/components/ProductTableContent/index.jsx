import React from "react";

export const ProductTableContent = ({
  sn,
  product,
  category,
  manufacturer,
  cprice,
  sprice,
  available,
  unit,
  quantity,
  action,
}) => {
  return (
    <>
      <td>{sn}</td>
      <td>{product}</td>
      <td>{category}</td>
      <td>{manufacturer}</td>
      <td>{cprice}</td>
      <td>{sprice}</td>
      <td>{available}</td>
      <td>{unit}</td>
      <td>
        <div className="quantify">{quantity}</div>
      </td>
      <td>
        <button className="CTA">{action}</button>
      </td>
    </>
  );
};
