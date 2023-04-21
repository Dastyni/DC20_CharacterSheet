import React, { useState } from "react";
import CharacterList from "./CharacterList";
import "../App.css";

const App = () => {
  const version = "0.3.2";

  return (
    <div>
      <CharacterList version={version} />
    </div>
  );
};

export default App;

//TODO #1 fix tooltips

//TODO #7 add Save DC
//TODO #8 add Attacks

//TODO #9 add equipment management
//TODO #10 Integrate components into DND cards

//TODO #11 Make a generic valueBlock
//TODO #12 Ensure all missing data is handled and doesn't break the page.
