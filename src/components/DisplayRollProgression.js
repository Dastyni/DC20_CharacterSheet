import React from "react";
import * as utils from "./Utils";
import Label from "./Label";

const DisplayRollProgression = ({ value, progression, position }) => {
  let parsedValue = parseInt(value);
  const positional = position === "rside" ? "smallText valign " : "smallText ";
  const className = "attribute saveValue float " + progression;

  if (progression === "heavy") {
    parsedValue += 5;
  } else {
    parsedValue += 10;
  }

  return (
    <span className=" container">
      <input
        className={className}
        type="text"
        disabled
        value={isNaN(parseInt(parsedValue)) ? "" : parseInt(parsedValue)}
        readOnly
      />
      <span className="">
        <Label className={positional}>
          {progression.charAt(0).toUpperCase() + progression.slice(1)}
        </Label>
      </span>
    </span>
  );
};

export default DisplayRollProgression;
