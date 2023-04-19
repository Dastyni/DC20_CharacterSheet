import React from "react";
import * as utils from "./Utils";

const DisplayManaMax = ({ character, onChange }) => {
  const attribKey = "Max";

  const handleChange = (event) => {
    const { value } = event.target;
    character.Mana.Max = value;
    onChange(character);
  };

  return (
    <React.Fragment>
      <input
        className="attribute maxHP"
        type="text"
        id={attribKey}
        name={attribKey}
        onChange={handleChange}
        value={
          isNaN(parseInt(character.Mana[attribKey]))
            ? ""
            : character.Mana[attribKey]
        }
      />
      <span className="maxHPText">
        <center>Max</center>
      </span>
    </React.Fragment>
  );
};

export default DisplayManaMax;
