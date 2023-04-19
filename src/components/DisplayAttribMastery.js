import React from "react";
import * as utils from "./Utils";

const DisplayAttribMastery = ({ character, attribKey, onChange }) => {
  const data = character.Attributes;

  const handleChange = (event) => {
    const { name, checked } = event.target;

    // console.log(name + " changing to  " + newValue);
    // const updatedMastery = {
    //   ...character.Mastery,
    //   [name]: checked,
    // };

    character.Mastery[name] = checked;
    console.log("mastery changing ... now " + character.Mastery[name]);

    character = utils.recalculateCharacter(character);
    console.log("mastery character now");
    console.log(character);
    // const newSave = utils.calculateSave(attribKey, updatedCharacter);

    // const newSaves = { ...updatedCharacter.Saves, [attribKey]: newSave };

    onChange(character);
  };

  return (
    <React.Fragment>
      <input
        type="checkbox"
        id={attribKey}
        name={attribKey}
        checked={utils.checkAttribMastery(attribKey, character)}
        onChange={handleChange}
        title={utils.getTooltip(attribKey, character)}
        placeholder={attribKey}
      />
      <br />
      <span className="smallText mastery">Mastery</span>
    </React.Fragment>
  );
};

export default DisplayAttribMastery;
