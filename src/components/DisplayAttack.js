import React from "react";
import * as utils from "./Utils";

const DisplayAttack = ({ character, attribKey, onChange }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange({ ...character, [name]: value });
  };

  return (
    <table>
      <tr className="">
        <span>
          <center>{attribKey}</center>
        </span>
      </tr>
      <tr>
        <center>
          <input
            className="attribute attackValue"
            type="text"
            id={attribKey}
            name={attribKey}
            onChange={handleChange}
            value={"+" + utils.calculateAttack(character)}
            readOnly
            disabled
          />
        </center>
      </tr>
    </table>
  );
};

export default DisplayAttack;
