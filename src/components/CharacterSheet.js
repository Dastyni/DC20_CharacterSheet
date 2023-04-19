import React, { useRef, useState, useEffect } from "react";
import AttributeBlock from "./AttributeBlock";
import DisplayAncestry from "./DisplayAncestry";
import DisplayAttack from "./DisplayAttack";
import DisplayCM from "./DisplayCM";
import DisplayClass from "./DisplayClass";
import DisplayDefenseAll from "./DisplayDefenseAll";
import DisplayLevel from "./DisplayLevel";
import DisplayNames from "./DisplayNames";
import DisplayPrime from "./DisplayPrime";
import DisplayHPAll from "./DisplayHPAll";
import DisplayAPAll from "./DisplayAPAll";
import DisplayManaBlock from "./DisplayManaBlock";
import DisplayTextArea from "./DisplayTextArea";

const CharacterSheet = ({ character, index, callbacks }) => {
  const [imageUrl, setImageUrl] = useState(
    "http://olcontact.com/DC20/static/media/Attack.4470de7b3caf1a9136c7.png"
  );

  character.index = index;
  const attributes = character.Attributes;
  console.log("Charactersheet with...", character);

  const { onChange, onDelete, onUnSelect } = callbacks;

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange({ ...character, [name]: value });
  };

  const handleDelete = (index) => {
    console.log("Asking to delete index ", index);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      console.log("attempting to delete index ", index);
      onDelete(index);
    }
  };

  return (
    <div>
      <p
        onClick={() => {
          handleDelete(index);
        }}
      >
        <button className="button-24">Delete</button>
      </p>
      <p
        onClick={() => {
          onUnSelect();
        }}
      >
        <button className="button">Back</button>
      </p>
      <div className="centerContent">
        <p>
          <DisplayNames character={character} onChange={onChange} />
          <DisplayClass character={character} onChange={onChange} />
          <DisplayAncestry character={character} onChange={onChange} />
          <DisplayLevel character={character} onChange={onChange} />
        </p>
      </div>
      <div className="centerContent ">
        <DisplayAPAll character={character} onChange={onChange} />
        <DisplayManaBlock
          character={character}
          attribKey={"Stamina"}
          onChange={onChange}
        />
        <DisplayManaBlock
          character={character}
          attribKey={"Mana"}
          onChange={onChange}
        />
      </div>
      <div className="centerContent ">
        <div className="centerContent setWidth table-wrapper">
          <DisplayHPAll character={character} onChange={onChange} />
          <DisplayAttack
            character={character}
            attribKey={"Attack"}
            onChange={onChange}
          />
          <DisplayPrime
            character={character}
            attribKey={"PrimeAttribute"}
            onChange={onChange}
          />
          <DisplayCM character={character} onChange={onChange} />
        </div>
      </div>
      <div className="centerContent">
        <DisplayDefenseAll character={character} onChange={onChange} />
      </div>
      <div className="centerContent">
        <AttributeBlock character={character} onChange={onChange} />
      </div>
      <div className="centerContent">
        <div className="centerContent setWidth">
          <div className="textAreaContainer ">
            <DisplayTextArea
              character={character}
              widthPercent={33}
              height={400}
              className="textarea"
              attribKey="Gear"
              onChange={onChange}
            />
            <DisplayTextArea
              character={character}
              attribKey="Features"
              widthPercent={33}
              height={400}
              className="textarea"
              onChange={onChange}
            />
            <DisplayTextArea
              character={character}
              attribKey="Notes"
              widthPercent={33}
              height={400}
              className="textarea"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSheet;
