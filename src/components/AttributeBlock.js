import React from "react";
import * as utils from "./Utils";
import DisplayAttribLine from "./DisplayAttribLine";

const AttributeBlock = ({ character, attribKey, onChange }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange({ ...character, [name]: value });
  };

  return (
    <table>
      <td>
        <DisplayAttribLine
          character={character}
          attribKey="Might"
          onChange={onChange}
        />
        <DisplayAttribLine
          character={character}
          attribKey="Agility"
          onChange={onChange}
        />
      </td>
      <td>
        <DisplayAttribLine
          character={character}
          attribKey="Intelligence"
          onChange={onChange}
        />
        <DisplayAttribLine
          character={character}
          attribKey="Charisma"
          onChange={onChange}
        />
      </td>
    </table>
  );
};

export default AttributeBlock;
