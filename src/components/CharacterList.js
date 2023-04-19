import React, { useState, useEffect } from "react";
import characterDefaults from "./characterDefaults";
import CharacterSheet from "./CharacterSheet";
import OutdatedSheet from "./OutdatedSheet";

const CharacterList = (version) => {
  const [selectedID, setSelectedID] = useState("");
  const [character, setCharacter] = useState("");
  const [charList, setList] = useState([]);
  const [outdatedCharacter, setOutdatedCharacter] = useState(false);

  useEffect(() => {
    const storedCharacters = localStorage.getItem("DCchar");
    const characters = storedCharacters ? JSON.parse(storedCharacters) : [];
    setList(characters);
  }, []);

  const handleSelect = (index) => {
    const isOutdated = charList[index].versionCreated !== version;
    console.log("This is an outdated character: " + isOutdated);

    setSelectedID(index);
    setCharacter(charList[index]);
    setOutdatedCharacter(isOutdated);
  };

  const handleUnSelect = () => {
    setOutdatedCharacter(false);
    setSelectedID("");
  };

  const handleDelete = (index) => {
    console.log("deleting index " + index);
    const updatedCharacters = charList.filter((_, i) => i !== index);
    console.log("Updated char list " + updatedCharacters);
    setList(updatedCharacters);
    console.log("after SetList");
    console.log("deleting index " + charList);
    setOutdatedCharacter(false);
    console.log(outdatedCharacter + " is now false ");
    setSelectedID("");
    console.log(" selectedID reset ");
    localStorage.setItem("DCchar", JSON.stringify(updatedCharacters));
  };

  const handleCreateNew = () => {
    let newChar = characterDefaults;
    newChar.versionCreated = version;
    const updatedCharacters = [...charList, newChar];
    localStorage.setItem("DCchar", JSON.stringify(updatedCharacters));
    setList(updatedCharacters);
    setSelectedID("");
  };

  const handleChange = (updatedCharacter) => {
    console.log("updating to... ", updatedCharacter);
    const updatedCharacters = charList.map((char, i) =>
      i === selectedID ? updatedCharacter : char
    );
    setList(updatedCharacters);
    localStorage.setItem("DCchar", JSON.stringify(updatedCharacters));
    setCharacter(updatedCharacter);
  };

  const callbacks = {
    onChange: handleChange,
    onDelete: handleDelete,
    onUnSelect: handleUnSelect,
  };

  return (
    <div className="content">
      {outdatedCharacter ? (
        <>
          This character should be deleted.
          <OutdatedSheet
            character={character}
            index={selectedID}
            callbacks={callbacks}
          />
        </>
      ) : selectedID !== "" && character !== "" ? (
        <CharacterSheet
          character={character}
          index={selectedID}
          callbacks={callbacks}
        />
      ) : (
        <>
          Select a Character to Load or{" "}
          <a onClick={handleCreateNew}>
            <u>Create a New Character</u>
          </a>
          <br />
          {charList.map((character, index) => (
            <p key={index}>
              <button
                className={`button${outdatedCharacter ? " outdated" : ""}`}
                onClick={() => handleSelect(index, character.versionCreated)}
              >
                {character.CharacterName}
                {character.versionCreated !== version && " (outdated)"}
              </button>
            </p>
          ))}
        </>
      )}
    </div>
  );
};

export default CharacterList;
