import React from "react";

import AttribSkills from "./AttribSkills";

const AllSkills = ({ character, onChange }) => {
  const data = character.Skills;
  console.log("Creating  " + character.Skills + "- Skill Line");

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
    <table className="setWidth ">
      <tr>
        <td className="alignTop">
          <AttribSkills
            character={character}
            onChange={onChange}
            attribKey={"Might"}
          />

          <AttribSkills
            character={character}
            onChange={onChange}
            attribKey={"Agility"}
          />
          <AttribSkills
            character={character}
            onChange={onChange}
            attribKey={"Charisma"}
          />
        </td>
        <td className="alignTop">
          <AttribSkills
            character={character}
            onChange={onChange}
            attribKey={"Other"}
          />
          <AttribSkills
            character={character}
            onChange={onChange}
            attribKey={"Intelligence"}
          />
        </td>
      </tr>
      <tr>
        <td className="alignTop"></td>
      </tr>
    </table>
  );
};

export default AllSkills;
