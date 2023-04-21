import React from "react";
import * as utils from "./Utils";

const DisplayDefensePhysical = ({ character, attribKey, onChange }) => {
  const target = character.Defense;

  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange({ ...character, [name]: value });
  };

  return (
    <table>
      <tr>
        <input
          className="attribute "
          type="text"
          id={attribKey}
          name={attribKey}
          onChange={handleChange}
          value={utils.calculateDefense(attribKey, character)}
          readOnly
        />
      </tr>
      <tr>
        <span>
          <center>
            {attribKey}
            <br />
            Defense
          </center>
        </span>
      </tr>
    </table>
  );
};

export default DisplayDefensePhysical;
