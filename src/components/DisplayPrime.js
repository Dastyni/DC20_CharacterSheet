import React from "react";
import * as utils from "./Utils";
import Label from "./Label";

const DisplayPrime = ({ character, attribKey, onChange }) => {
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
            type="text"
            name={attribKey}
            onChange={handleChange}
            value={utils.calculatePrime(character)}
            readOnly
            disabled
          />
        </center>
      </tr>
      <tr>
        <Label>
          <center>
            Prime
            <br />
            Attribute
          </center>
        </Label>
      </tr>
    </table>
  );
};

export default DisplayPrime;
