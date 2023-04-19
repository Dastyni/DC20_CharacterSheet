import React from "react";
import * as utils from "./Utils";
import Label from "./Label";

const DisplayAPAll = ({ character, onChange }) => {
  const data = character.AP;
  console.log("got APs with ", data);

  const handleChange = (event) => {
    const { name } = event.target;

    const newAPs = data.map((ap, index) =>
      index === parseInt(name) ? !ap : ap
    );

    onChange({ ...character, AP: newAPs });
  };

  const handleReset = () => {
    onChange({ ...character, AP: [true, true, true, true, false] });
  };

  return (
    <table className="corners">
      <tr>
        <center>
          <Label classname={"centerContent"}>AP</Label>
          <span className="reset " onClick={handleReset}>
            {" "}
            Reset
          </span>
        </center>
      </tr>
      <tr>
        {data.map((ap, index) => (
          <label
            key={index}
            htmlFor={`ap-${index}`}
            style={{ display: "inline-block", marginRight: "8px" }}
          >
            <input
              className="attribute"
              type="checkbox"
              id={`ap-${index}`}
              name={index}
              checked={ap}
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
                backgroundColor: ap ? "rgba(199, 204, 129, 1)" : "white",
              }}
            ></span>
          </label>
        ))}
      </tr>
    </table>
  );
};

export default DisplayAPAll;
