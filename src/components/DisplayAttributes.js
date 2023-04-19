import React from "react";
import * as utils from "./Utils";

const DisplayArray = ({ character, index, onChange }) => {
  const data = character.Attributes;
  console.log("got array with ", data);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("updating  ", name, " to ", value);

    // create a new object with the updated key-value pair
    const updatedAttributes = {
      ...character.Attributes,
      [name]: value,
    };

    console.log("Now have  ", name, " to ", updatedAttributes[name]);
    // call onChange with the updated object
    onChange({ ...character, Attributes: updatedAttributes });
  };

  return (
    <div>
      <table>
        {Object.entries(data).map(([key, value]) => (
          <tr>
            <td>
              <div key={key}>
                <label htmlFor={key}>
                  <b>{key}</b>
                </label>
              </div>
            </td>
            <td className="attribValues float">
              <React.Fragment>
                <input
                  className="attribute"
                  type="text"
                  id={key}
                  name={key}
                  value={utils.calculateAttrib(key, data)}
                  onChange={handleChange}
                  title={utils.getTooltip(key, character)}
                />
                {/* <div className="spacer float">
                  <button
                    className="attribute-button top"
                    onClick={handleDecrement}
                    name={key}
                  >
                    -
                  </button>
                  <br />
                  <button
                    className="attribute-button bottom"
                    onClick={handleIncrement}
                    name={key}
                  >
                    +
                  </button>
                </div> */}
              </React.Fragment>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DisplayArray;
