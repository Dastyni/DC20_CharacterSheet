import React from "react";

const DisplayArray = ({ data, index, onChange }) => {
  console.log("got array with ", data);

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange({ ...data, [name]: value });
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
            <td>
              <input
                className="attribute"
                type="text"
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DisplayArray;
