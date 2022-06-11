import { React, useState } from "react";

export const Tablerecords = ({ day, timein, timeout, more, hours }) => {
  const [see, setsee] = useState(false);

  const seeLess = () => {
    setsee(!see);
    console.log("Precious");
  };

  return (
    <>
      <td className="temp">{day}</td>
      <td className="redbg">
        <div className="redarr">
          <span>
            <img src="./images/arrowIn.svg" />
            {timein}
          </span>
        </div>
        <div className={`locate ${!see && "hide"}`}>
          <img src="./images/location.svg" />
          <p>16, Joseph street, Ikeja Lagos.</p>
        </div>
      </td>
      <td className="greenbg">
        <div className="greenarr">
          <span>
            <img src="./images/arrowOut.svg" />
            {timeout}
          </span>
        </div>
        <div className={`locate ${!see && "hide"}`}>
          <img src="./images/location.svg" />
          <p>16, Joseph street, Ikeja Lagos.</p>
        </div>
      </td>
      <td>{hours}</td>
      <td>
        <button className="seeMore" onClick={() => setsee(seeLess)}>
          {more}
        </button>
      </td>
    </>
  );
};
