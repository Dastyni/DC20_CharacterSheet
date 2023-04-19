import React from "react";
import * as utils from "./Utils";
import DisplayDefenseIndividual from "./DisplayDefenseIndividual";
import DisplaySave from "./DisplaySave";
import Label from "./Label";

const DisplayDefenseAll = ({ character, onChange }) => {
  return (
    <React.Fragment>
      <table className="setWidth">
        <tr>
          <td style={{ textAlign: "center" }} className="corners">
            <Label>Physical</Label>
            <div className="centerContent ">
              <DisplayDefenseIndividual
                character={character}
                attribKey="Physical"
                onChange={onChange}
              />
              <DisplaySave
                character={character}
                attribKey="Physical"
                onChange={onChange}
              />
            </div>
          </td>

          <td style={{ textAlign: "center" }} className="corners">
            <Label>Mental</Label>
            <div className="centerContent">
              <DisplayDefenseIndividual
                character={character}
                attribKey="Mental"
                onChange={onChange}
              />
              <DisplaySave
                character={character}
                attribKey="Mental"
                onChange={onChange}
              />
            </div>
          </td>
        </tr>
        {/* <tr>
          <td style={{ textAlign: "center" }}>
            <center>
              <DisplaySave
                character={character}
                attribKey="Physical"
                onChange={onChange}
              />
            </center>
          </td>
          <td style={{ textAlign: "center" }}>
            <center>
              <DisplaySave
                character={character}
                attribKey="Mental"
                onChange={onChange}
              />
            </center>
          </td>
        </tr> */}
      </table>
    </React.Fragment>
  );
};

export default DisplayDefenseAll;
