import React from "react";

const DisplayTextarea = ({
  character,
  attribKey,
  widthPercent,
  height,
  className,
  onChange,
}) => {
  const handleChange = (event) => {
    const { value } = event.target;
    character.Textarea[attribKey] = value;
    onChange(character);
  };

  const parentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: `${height}px`,
    width: `${widthPercent}%`,
  };

  const textareaStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div style={parentStyle}>
      <span>{attribKey}</span>
      {character.Textarea && character.Textarea[attribKey] ? (
        <textarea
          className={className}
          style={textareaStyle}
          value={character.Textarea[attribKey]}
          onChange={handleChange}
        />
      ) : (
        <textarea
          className={className}
          style={textareaStyle}
          value=""
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default DisplayTextarea;
