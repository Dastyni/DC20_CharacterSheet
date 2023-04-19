import React from "react";
import * as utils from "./Utils";

const DisplayLevel = ({ character, onChange }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("Updating Level.... to " + value);
    character.Level = value;
    character = utils.recalculateCharacter(character);
    onChange(character);
  };

  return (
    <table>
      <tr>
        Level
        <input
          className="attribute"
          type="text"
          name="Level"
          value={character.Level}
          onChange={handleChange}
        />
      </tr>
      <tr style={{ textAlign: "center" }}>
        <input
          id="experience"
          type="text"
          name="Experience"
          value={character.Experience}
          onChange={handleChange}
        />
      </tr>
      <tr style={{ textAlign: "center" }}>Experience</tr>
    </table>
  );
};

export default DisplayLevel;
