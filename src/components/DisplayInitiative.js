import React from "react";
import * as utils from "./Utils";
import Label from "./Label";

const DisplayInitiative = ({ character, attribKey, onChange }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange({ ...character, [name]: value });
  };

  return (
    <table>
      <tr>
        <center>
          <input
            className="attribute "
            type="number"
            name={attribKey}
            onChange={handleChange}
            value={character[attribKey]}
          />
        </center>
      </tr>
      <tr>
        <Label>
          <center>{attribKey}</center>
        </Label>
      </tr>
    </table>
  );
};

export default DisplayInitiative;
