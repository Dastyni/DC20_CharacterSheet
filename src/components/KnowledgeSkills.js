import React from "react";
import * as utils from "./Utils";
import Label from "./Label";
import SingleSkill from "./SingleSkill";

const KnowledgeSkills = ({ character, onChange, attribKey }) => {
  const data = character.Skills.Intelligence.subSkills;
  console.log("Splitting these knowledge areas ", data);

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
        {Object.entries(data).map(([key, value]) => (
          <SingleSkill
            character={character}
            onChange={onChange}
            attribKey={attribKey}
            skillName={key}
            knowledgeSkill={true}
          />
        ))}
      </div>
    </>
  );
};

export default KnowledgeSkills;
