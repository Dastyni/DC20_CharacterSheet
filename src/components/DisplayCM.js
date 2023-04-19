import React from "react";
import * as utils from "./Utils";
import Label from "./Label";

const DisplayCM = ({ character, attribKey, onChange }) => {
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
            id={attribKey}
            name={attribKey}
            onChange={handleChange}
            value={"+" + utils.getCombatMastery(character)}
            readOnly
            disabled
          />
        </center>
      </tr>
      <tr>
        <Label className={""}>
          <center>
            Combat
            <br />
            Mastery
          </center>
        </Label>
      </tr>
    </table>
  );
};

export default DisplayCM;
