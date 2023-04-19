import React from "react";

const DisplayClass = ({ character, onChange }) => {
  const handleChange = (event) => {
    console.log("Changing Class");
    const { name, value } = event.target;
    onChange({ ...character, [name]: value });
  };

  return (
    <div className="float">
      <div className="centering">
        <input
          type="text"
          name="Class"
          value={character.Class}
          onChange={handleChange}
        />{" "}
        <br />
        Class
      </div>
      <div className="centering">
        <input
          type="text"
          name="Subclass"
          value={character.Subclass}
          onChange={handleChange}
        />{" "}
        <br />
        Subclass
      </div>
    </div>
  );
};

export default DisplayClass;
