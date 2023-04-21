import React from "react";
import * as utils from "./Utils";
import Label from "./Label";
import SingleSkill from "./SingleSkill";
import KnowledgeSkills from "./KnowledgeSkills";

const AttribSkills = ({ character, onChange, attribKey }) => {
  const data = character.Skills[attribKey];
  console.log("Splitting these skills (" + attribKey + ")", data);

  const handleChange = (event) => {
    const { name } = event.target;

    const newAPs = data.map((ap, index) =>
      index === parseInt(name) ? !ap : ap
    );

    onChange({ ...character, AP: newAPs });
  };

  const dataEntries = Object.entries(data);

  return (
    <>
      <div key={attribKey}>
        <p>
          {attribKey === "Other"
            ? null
            : `${attribKey} (${utils.getBonus(
                character.Attributes[attribKey]
              )})`}
        </p>
        {Object.entries(data).map(([key, value]) =>
          key === "subSkills" ? (
            <KnowledgeSkills
              character={character}
              onChange={onChange}
              attribKey={attribKey}
            />
          ) : (
            <SingleSkill
              character={character}
              onChange={onChange}
              attribKey={attribKey}
              skillName={key}
            />
          )
        )}
      </div>
    </>
  );
};

export default AttribSkills;
