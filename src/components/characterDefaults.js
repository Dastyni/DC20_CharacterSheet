const CharacterDefaults = {
  Id: Date.now(),
  CharacterName: "Adventurer!",
  PlayerName: "",
  Class: "class",
  Subclass: "subclass",
  Ancestry: "ancestry",
  Background: "background",
  Level: 1,
  Experience: 0,

  Attack: 1,
  UseMightForPhysicalDef: false,
  ArmorValue: 0,
  RestPoints: 0,
  DR: 0,
  AP: [true, true, true, true, false],
  Exaustion: [false, false, false, false, false],
  Attributes: {
    Might: "",
    Agility: "",
    Intelligence: "",
    Charisma: "",
  },
  Textarea: {},
  Saves: {
    Physical: "",
    Mental: "",
    Might: "",
    Agility: "",
    Intelligence: "",
    Charisma: "",
  },
  Mastery: {
    Might: false,
    Intelligence: false,
    Agility: false,
    Charisma: false,
    CombatMastery: 1,
  },
  PrimeAttribute: "",
  MaxHP: 0,
  CurrentHP: 0,
  Defense: {
    Physical: 0,
    Mental: 0,
  },
  Skills: {
    Might: {
      Athletics: 0,
      Intimidation: 0,
    },
    Agility: {
      Acrobatics: 0,
      Stealth: 0,
      Trickery: 0,
    },
    Intelligence: {
      Investigation: 0,
      Medicine: 0,
      Survival: 0,
      Knowledge: 0,
      subSkills: {
        Nature: 0,
        History: 0,
        Arcana: 0,
        Occultism: 0,
        Religion: 0,
        Lore: 0,
      },
    },

    Charisma: {
      Animal: 0,
      Influence: 0,
      Insight: 0,
      Performance: 0,
    },
    Other: {
      Awareness: 0,
    },
  },
  Save_DC: {
    Base: 0,
    Heavy: 0,
    Brutal: 0,
  },
  Coins: "",
  Inventory: "",
  Features: "",
  Mana: {
    Max: 0,
    Current: 0,
  },
  Stamina: {
    Max: 0,
    Current: 0,
  },
  Initiative: 0,
  Movement: 4,
  Attacks: [{ Weapon: "", Damage: 1, Other: "" }],
};

export default CharacterDefaults;
