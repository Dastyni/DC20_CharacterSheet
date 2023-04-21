import React from "react";
import * as utils from "./Utils";
import Label from "./Label";

const SaveDC = ({ character, attribKey, onChange }) => {
  const attribName = attribKey.replace(/_/g, " ");
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
            // There is a calculation to be had here...
            value={utils.getSaveDCValue(character)}
            readOnly
            disabled
          />
        </center>
      </tr>
      <tr>
        <Label>
          <center>{attribName}</center>
        </Label>
      </tr>
    </table>
  );
};

export default SaveDC;
