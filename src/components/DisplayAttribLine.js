import React from "react";
import * as utils from "./Utils";

import DisplayAttribValue from "./DisplayAttribValue";
import DisplayAttribMastery from "./DisplayAttribMastery";
import DisplayAttribSave from "./DisplayAttribSave";

const DisplayAttribLine = ({ character, attribKey, onChange }) => {
  const data = character.Attributes;
  console.log("Creating  " + attribKey + "- Attribute Line");

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("updating  ", name, " to ", value);

    // create a new object with the updated key-value pair
    const updatedAttributes = {
      ...character.Attributes,
      [name]: value,
    };

    console.log("Now have  ", name, " to ", updatedAttributes[name]);
    // call onChange with the updated object
    onChange({ ...character, Attributes: updatedAttributes });
  };

  return (
    <div>
      <table>
        <tr>
          <td style={{ width: "100px" }} className="attributeLables">
            <div key={attribKey}>
              <label htmlFor={attribKey}>
                <b>{attribKey}</b>
              </label>
            </div>
          </td>
          <td style={{ width: "50px" }}>
            <DisplayAttribValue
              character={character}
              attribKey={attribKey}
              onChange={onChange}
            />
          </td>
          {attribKey === "Fortitude" || attribKey === "Grit" ? (
            <td className="masteryBufferTD"></td>
          ) : (
            <>
              <td style={{ width: "50px" }}>
                <DisplayAttribMastery
                  character={character}
                  attribKey={attribKey}
                  onChange={onChange}
                />
              </td>
            </>
          )}
          <td>
            <DisplayAttribSave
              character={character}
              attribKey={attribKey}
              onChange={onChange}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default DisplayAttribLine;
