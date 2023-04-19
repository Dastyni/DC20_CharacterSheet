import React from "react";
import * as utils from "./Utils";

const DisplayHPCurrent = ({ character, attribKey, onChange }) => {
  attribKey = "CurrentHP";

  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange({ ...character, [name]: value });
  };

  return (
    <React.Fragment>
      <input
        className="attribute hpValue"
        type="text"
        id={attribKey}
        name={attribKey}
        onChange={handleChange}
        value={character[attribKey]}
      />
      <span>
        <center>HP</center>
      </span>
    </React.Fragment>
  );
};

export default DisplayHPCurrent;
