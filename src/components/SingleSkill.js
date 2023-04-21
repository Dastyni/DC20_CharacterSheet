import React from "react";
import * as utils from "./Utils";
import Label from "./Label";
import KnowledgeSkills from "./KnowledgeSkills";

const SingleSkill = ({
  character,
  onChange,
  attribKey,
  skillName,
  knowledgeSkill,
}) => {
  console.log(
    "got single Skill " +
      attribKey +
      " with " +
      skillName +
      " and is knowledge sub skill? ",
    knowledgeSkill
  );
  let value = 0;

  if (knowledgeSkill) {
    console.log(
      "finding subskills values... ",
      character.Skills.Intelligence.subSkills
    );
    value = parseInt(character.Skills.Intelligence.subSkills[skillName]) || 0;
  } else {
    value = parseInt(character.Skills[attribKey][skillName]) || 0;
  }

  const handleChange = (event) => {
    const { name, checked } = event.target;
    let newValue = value;

    if (!checked && name === "0" && parseInt(value) === 1) {
      newValue = 0;
    } else if (checked || value > parseInt(name)) {
      newValue = parseInt(name) + 1;
    } else {
      newValue = name;
    }

    let newAttribSkills = {};
    // handle Knowledge SubSkills
    if (knowledgeSkill) {
      newAttribSkills = {
        ...character.Skills.Intelligence.subSkills,
        [skillName]: newValue,
      };
      character.Skills.Intelligence.subSkills = newAttribSkills;
      console.log("have list ", newAttribSkills);
      console.log(
        "Updating knowledge subskills " + skillName + " to " + newValue,
        newAttribSkills,
        character.Skills.Intelligence.subSkills
      );
    } else {
      // Handle normal skills
      newAttribSkills = {
        ...character.Skills[attribKey],
        [skillName]: newValue,
      };
      character.Skills[attribKey] = newAttribSkills;
    }

    console.log("updating character skill with character: ", character);
    onChange(character);
  };

  return (
    <>
      <table className="skillWidth">
        <tbody>
          <tr>
            {knowledgeSkill ? <td style={{ width: "40px" }}></td> : null}
            <td style={{ width: "100px" }}>{skillName}</td>
            <td style={{ width: "40px" }}>
              <u>
                {parseInt(utils.getSkillBonus(value, attribKey, character)) >= 0
                  ? `+${utils.getSkillBonus(value, attribKey, character)}`
                  : utils.getSkillBonus(value, attribKey, character)}
              </u>
            </td>
            <td>
              {[...Array(5)].map((_, index) => (
                <React.Fragment key={index}>
                  <td className="">
                    <label>
                      <input
                        className="attribute"
                        type="checkbox"
                        name={index}
                        checked={index < value}
                        onChange={handleChange}
                        style={{ display: "none " }}
                      />
                      <span
                        name={index}
                        checked={index < value}
                        onChange={handleChange}
                        style={{
                          display: "block",
                          width: "15px",
                          height: "15px",
                          borderRadius: "50%",
                          border: "1px solid black",
                          backgroundColor:
                            index < value ? "rgba(199, 204, 129, 1)" : "white",
                        }}
                      ></span>
                    </label>
                  </td>
                </React.Fragment>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SingleSkill;
