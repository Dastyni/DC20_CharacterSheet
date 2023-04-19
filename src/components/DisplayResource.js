import React from "react";
import * as utils from "./Utils";

const DisplayResource = ({ character, onChange, type, attribKey }) => {
  let classes = "attribute ";
  let textclass = "";
  let text = "";

  if (attribKey === "Current") {
    classes += type + "Value ";
    text = type;
  } else {
    classes += "maxHP ";
    textclass += " maxHPText";
    text = attribKey;
  }

  const handleChange = (event) => {
    const { value } = event.target;

    character[type][attribKey] = value;

    onChange(character);
  };

  return (
    <React.Fragment>
      <input
        className={classes}
        type="text"
        id={attribKey}
        name={attribKey}
        onChange={handleChange}
        value={
          isNaN(parseInt(character[type][attribKey]))
            ? ""
            : character[type][attribKey]
        }
      />
      <span className={textclass}>
        <center>{text}</center>
      </span>
    </React.Fragment>
  );
};

export default DisplayResource;
