import React from "react";
import * as utils from "./Utils";

const DisplayHPMax = ({ character, onChange }) => {
  const attribKey = "MaxHP";

  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange({ ...character, [name]: value });
  };

  return (
    <React.Fragment>
      <input
        className="attribute maxHP"
        type="text"
        id={attribKey}
        name={attribKey}
        onChange={handleChange}
        value={character[attribKey]}
      />
      <span className="maxHPText">
        <center>Max</center>
      </span>
    </React.Fragment>
  );
};

export default DisplayHPMax;
