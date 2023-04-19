import React from "react";

const Label = ({ className, id, children }) => {
  return (
    <label className={className} id={id}>
      {children}
    </label>
  );
};

export default Label;
