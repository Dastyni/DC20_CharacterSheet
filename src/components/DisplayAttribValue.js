import React from "react";
import * as utils from "./Utils";

const DisplayAttribValue = ({ character, attribKey, onChange }) => {
  const data = character.Attributes;
  console.log("Creating  " + attribKey + " Attribute value");

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("updating  ", name, " to ", value);

    // create a new object with the updated key-value pair
    const updatedAttributes = {
      ...character.Attributes,
      [name]: value,
    };
    let updatedCharacter = {
      ...character,
      Attributes: updatedAttributes,
    };
    const updatedSaves = {
      ...character.Saves,
      [attribKey]: utils.calculateSave(attribKey, updatedCharacter),
    };

    updatedCharacter = {
      ...character,
      Saves: updatedSaves,
    };

    console.log(
      "======================== Now have  ",
      name,
      " to ",
      updatedAttributes[name] +
        " with save " +
        updatedCharacter.Saves[attribKey]
    );
    // call onChange with the updated object
    onChange({
      ...character,
      Attributes: updatedAttributes,
      Saves: updatedSaves,
    });
  };

  return (
    <React.Fragment>
      <input
        className="attribute"
        type="number"
        id={attribKey}
        name={attribKey}
        value={utils.calculateAttrib(attribKey, data)}
        onChange={handleChange}
        title={utils.getTooltip(attribKey, character)}
      />
    </React.Fragment>
  );
};

export default DisplayAttribValue;
