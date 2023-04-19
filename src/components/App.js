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
