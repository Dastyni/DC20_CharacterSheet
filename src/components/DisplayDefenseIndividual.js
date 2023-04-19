import React from "react";
import * as utils from "./Utils";
import Label from "./Label";
import DisplayRollProgression from "./DisplayRollProgression";

const DisplayDefenseIndividual = ({ character, attribKey, onChange }) => {
  console.log("----GOT " + character.Defense[attribKey]);
  const target = character.Defense;
  const defValue = utils.calculateDefense(attribKey, character);

  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange({ ...character, [name]: value });
  };

  const handleToggleChange = (event) => {
    const { checked } = event.target;
    console.log("setting UseMightForPhysicalDef to " + checked);
    onChange({ ...character, UseMightForPhysicalDef: checked });
  };

  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <center>
        <table>
          <tr>
            <td>
              <input
                className="attribute "
                type="number"
                disabled
                id={attribKey}
                name={attribKey}
                onChange={handleChange}
                value={isNaN(parseInt(defValue)) ? "" : parseInt(defValue)}
                readOnly
              />
            </td>
            <td>
              <span className="container stack">
                <DisplayRollProgression
                  value={defValue}
                  progression={"heavy"}
                  position={"rside"}
                />
                <DisplayRollProgression
                  value={defValue}
                  progression={"brutal"}
                  position={"rside"}
                />
              </span>
            </td>
            <br />
          </tr>
          <tr>
            <td>
              <Label className="smallText flex">
                <center>Defense</center>
              </Label>
            </td>
            {attribKey === "Physical" ? (
              <span>
                <input
                  type="checkbox"
                  checked={character.UseMightForPhysicalDef}
                  onChange={handleToggleChange}
                  title={utils.getTooltip(attribKey, character)}
                  placeholder={attribKey}
                />
                <Label className={"smallText valign"}>Use Might?</Label>
              </span>
            ) : null}
          </tr>
        </table>
      </center>
    </div>
  );
};

export default DisplayDefenseIndividual;
