import React from "react";
import * as utils from "./Utils";

import DisplayAttribValue from "./DisplayAttribValue";
import DisplayAttribMastery from "./DisplayAttribMastery";
import DisplayAttribSave from "./DisplayAttribSave";
import Label from "./Label";

const DisplaySave = ({ character, attribKey, onChange }) => {
  return (
    <div>
      <DisplayAttribSave character={character} attribKey={attribKey} />
    </div>
  );
};

export default DisplaySave;
