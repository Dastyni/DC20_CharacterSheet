import React from "react";
import DisplayResource from "./DisplayResource";

const DisplayManaBlock = ({ character, attribKey, onChange }) => {
  return (
    <React.Fragment>
      <table className="noflex">
        <td>
          <DisplayResource
            character={character}
            onChange={onChange}
            type={attribKey}
            attribKey={"Current"}
          />
        </td>
        <td>
          <DisplayResource
            character={character}
            onChange={onChange}
            type={attribKey}
            attribKey={"Max"}
          />
        </td>
      </table>
    </React.Fragment>
  );
};

export default DisplayManaBlock;
