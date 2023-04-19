import React from "react";
import * as utils from "./Utils";
import DisplayHPCurrent from "./DisplayHPCurrent";
import DisplayHPMax from "./DisplayHPMax";

const DisplayAllHP = ({ character, attribKey, onChange }) => {
  return (
    <React.Fragment>
      <table className="noflex">
        <td>
          <DisplayHPCurrent character={character} onChange={onChange} />
        </td>
        <td>
          <DisplayHPMax character={character} onChange={onChange} />
        </td>
      </table>
    </React.Fragment>
  );
};

export default DisplayAllHP;
