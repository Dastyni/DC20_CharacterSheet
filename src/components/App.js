import React, { useState } from "react";
import CharacterList from "./CharacterList";
import "../App.css";

const App = () => {
  const version = 0.3;

  return (
    <div>
      <CharacterList version={version} />
    </div>
  );
};

export default App;

//TODO #1 fix tooltips
//TODO #2 add initiative
//TODO #3 add Movement
//TODO #4 add Exaustion
//TODO #5 add skills
//TODO #6 add rest points
//TODO #7 add Save DC
//TODO #8 add Attacks

//TODO #9 add equipment management
//TODO #10 Integrate components into DND cards
