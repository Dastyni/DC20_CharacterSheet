import React from "react";
import * as utils from "./Utils";

const DisplayAttribSave = ({ character, attribKey }) => {
  const data = character.Saves;
  const saveValue = utils.calculateSave(attribKey, character);

  //const handleChange = (event) => {};

  return (
    <React.Fragment>
      <table>
        <tr>
          <td>
            <input
              className="attribute saveValue"
              type="text"
              id={attribKey}
              name={attribKey}
              value={isNaN(parseInt(saveValue)) ? "" : parseInt(saveValue)}
              readOnly
              disabled
            />
          </td>
          <td>
            <input
              className="attribute saveValue heavy"
              type="text"
              id={attribKey}
              name={attribKey}
              value={
                isNaN(parseInt(saveValue) + 5) ? "" : parseInt(saveValue) + 5
              }
              readOnly
              disabled
            />
          </td>
          <td>
            <input
              className="attribute saveValue brutal"
              type="text"
              id={attribKey}
              name={attribKey}
              value={
                isNaN(parseInt(saveValue) + 10) ? "" : parseInt(saveValue) + 10
              }
              readOnly
              disabled
            />
          </td>
          <br />
        </tr>
        <tr>
          <td>
            <span className="smallText">
              <center>Save</center>
            </span>
          </td>
          <td>
            <span className="smallText">
              <center>Heavy</center>
            </span>
          </td>
          <td>
            <span className="smallText">
              <center>Brutal</center>
            </span>
          </td>
        </tr>
      </table>
    </React.Fragment>
  );
};

export default DisplayAttribSave;
