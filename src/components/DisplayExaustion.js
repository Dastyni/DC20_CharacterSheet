import React from "react";
import * as utils from "./Utils";
import Label from "./Label";
import skull1 from "../images/skull_white.png";
import skull2 from "../images/skull_black.png";

const DisplayExaustion = ({ character, onChange }) => {
  const data = character.Exaustion;
  console.log("got Exaustions with ", data);

  const handleChange = (event) => {
    const { name, checked } = event.target;

    // const newExaustion = data.map((value, index) =>
    //   index === parseInt(name) ? !value : value
    // );

    character.Exaustion[name] = checked;
    onChange(character);
  };

  const imageClassName = "skull-image";
  return (
    <table className="corners">
      <tr>
        <center>
          <Label classname={"centerContent"}>Exaustion</Label>
        </center>
      </tr>
      <tr>
        {data.map((exaustion, index) =>
          parseInt(index) !== 4 ? (
            <label
              key={index}
              htmlFor={`exaustion-${index}`}
              style={{ display: "inline-block", marginRight: "8px" }}
            >
              <input
                className="attribute"
                type="checkbox"
                id={`exaustion-${index}`}
                name={index}
                checked={exaustion}
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <span
                style={{
                  display: "inline-block",
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  border: "1px solid black",
                  backgroundColor: exaustion
                    ? "rgba(199, 204, 129, 1)"
                    : "white",
                }}
              ></span>
            </label>
          ) : (
            <label
              key={index}
              htmlFor={`exaustion-${index}`}
              //   className={`skull-image ${exaustion ? "selected" : ""}`}
              onClick={() =>
                handleChange({ target: { name: index, checked: !exaustion } })
              }
            >
              <img
                className="skullsize"
                src={`${exaustion ? skull1 : skull2}`}
                alt={`skull-${index}`}
              />
            </label>
          )
        )}
      </tr>
    </table>
  );
};

export default DisplayExaustion;
