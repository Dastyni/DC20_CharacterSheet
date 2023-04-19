// utils.js

export const checkAttribMastery = (attribKey, character) => {
  return character.Mastery[attribKey];
};

export const calculateAttrib = (key, attributes) => {
  console.log("Calculating " + key);
  let parsedValue = parseInt(attributes[key]);
  if (key === "Grit") {
    parsedValue =
      (parseInt(attributes.Charisma) + parseInt(attributes.Intelligence)) / 2;
    console.log("got " + parsedValue);
  }
  if (key === "Fortitude") {
    parsedValue =
      (parseInt(attributes.Might) + parseInt(attributes.Agility)) / 2;
    console.log("got " + parsedValue);
  }

  return isNaN(parsedValue) ? "" : Math.ceil(parsedValue);
};

export const formatValue = (value) => {
  return `$${value.toFixed(2)}`;
};

export const getTooltip = (key, character) => {
  console.log("found key for tooltip: ", key);
  if (key === "Fortitude") {
    const ttValue =
      "Calculation is:\\n" +
      character.Attributes.Might +
      " Might\\n" +
      "+ " +
      character.Attributes.Agility +
      " Agility\\n" +
      "------------------\\n" +
      (parseInt(character.Attributes.Might) +
        parseInt(character.Attributes.Agility)) +
      "/ 2";
    console.log("fort tooltip = ", ttValue);
    return ttValue;
  }
  return "This is a " + key + " stat.";
};

export const calculateSave = (key, character) => {
  // check for physical and mental saves here...
  let saveValue = 0;
  if (key === "Physical") {
    return Math.ceil(
      (parseInt(character.Saves.Might) + parseInt(character.Saves.Agility)) / 2
    );
  }

  if (key === "Mental") {
    return Math.ceil(
      (parseInt(character.Saves.Intelligence) +
        parseInt(character.Saves.Charisma)) /
        2
    );
  }

  // Other attributes here.
  if (checkAttribMastery(key, character)) {
    return parseInt(character.Attributes[key]) + Math.ceil(character.Level / 2);
  }

  return isNaN(character.Attributes[key]) ? "" : character.Attributes[key];
};

const avgAttribs = (attrib1, attrib2, character) => {
  return Math.ceil(
    (parseInt(character.Attributes[attrib1]) +
      parseInt(character.Attributes[attrib2])) /
      2
  );
};

export const calculatePrime = (character) => {
  const max = Math.max(
    parseInt(character.Attributes.Might),
    parseInt(character.Attributes.Agility),
    parseInt(character.Attributes.Intelligence),
    parseInt(character.Attributes.Charisma)
  );

  return isNaN(max) ? "" : max;
};

export const getCombatMastery = (character) => {
  const val = Math.ceil(parseInt(character.Level) / 2);
  return isNaN(val) ? "" : val;
};

export const calculateAttack = (character) => {
  const prime = calculatePrime(character);

  return prime + getCombatMastery(character);
};

export const calculateDefense = (attribKey, character) => {
  const might = parseInt(character.Attributes["Might"]);
  const agility = parseInt(character.Attributes["Agility"]);
  const int = parseInt(character.Attributes["Intelligence"]);
  const cha = parseInt(character.Attributes["Charisma"]);

  console.log(
    "*** calc def for " +
      attribKey +
      " got: \n   " +
      might +
      "\n   " +
      agility +
      "\n   " +
      int +
      "\n   " +
      cha
  );

  //Base defense of 8
  let defValue = 8;
  console.log("def now " + defValue);

  if (attribKey === "Physical") {
    if (character.UseMightForPhysicalDef) {
      defValue += might;
    } else {
      defValue += agility;
    }

    //Add Armor
    defValue += parseInt(character.ArmorValue);
  } else {
    // Mental Defense

    //Add mental stats
    defValue += int + cha;
  }

  //Add Combat Mastery
  defValue += getCombatMastery(character);
  return defValue;
};

export const recalculateCharacter = (character) => {
  const CM = getCombatMastery(character);

  Object.keys(character.Saves).forEach((saveKey) => {
    character.Saves[saveKey] = calculateSave(saveKey, character);
  });

  // Recalculate category saves
  character.Saves.Physical = calculateSave("Physical", character);
  character.Saves.Mental = calculateSave("Mental", character);

  // Recalculate defense
  character.Defense.Physical = calculateDefense("Physical", character);
  character.Defense.Mental = calculateDefense("Mental", character);

  return character;
};
