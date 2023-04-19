import React from "react";

const DisplayAncestry = ({ character, onChange }) => {
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
          name="Ancestry"
          value={character.Ancestry}
          onChange={handleChange}
        />{" "}
        <br />
        Ancestry
      </div>
      <div className="centering">
        <input
          type="text"
          name="Background"
          value={character.Background}
          onChange={handleChange}
        />{" "}
        <br />
        Background
      </div>
    </div>
  );
};

export default DisplayAncestry;
