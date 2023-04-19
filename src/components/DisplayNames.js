import React from "react";

const DisplayNames = ({ character, onChange }) => {
  console.log("Printing names with ", character);

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange({ ...character, [name]: value });
  };

  return (
    <div className="float">
      <div className="centering">
        <input
          type="text"
          name="CharacterName"
          value={character.CharacterName}
          onChange={handleChange}
        />{" "}
        <br />
        Character Name
      </div>
      <div className="centering">
        <input
          type="text"
          name="PlayerName"
          value={character.PlayerName}
          onChange={handleChange}
        />{" "}
        <br />
        Player Name
      </div>
    </div>
  );
};

export default DisplayNames;
