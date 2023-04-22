import React, { useState } from "react";

const Attacks = ({ character }) => {
  const [items, setItems] = useState(character.Attacks);

  // Handle a change in the value of an item in the table
  const handleChange = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  // Handle the click of the "-" button to delete a row
  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  // Handle the click of the "+" button to add a new row
  const handleAddRow = () => {
    const newItems = [...items, ""];
    setItems(newItems);
  };

  return (
    <div>
      {items.map((item, index) => (
        <table key={index}>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>-</button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
      <button onClick={() => handleAddRow()}>+</button>
    </div>
  );
};

export default Attacks;
