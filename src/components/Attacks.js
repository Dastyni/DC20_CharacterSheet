import React, { useState } from "react";

const Attacks = ({ character, onChange }) => {
  const [items, setItems] = useState(character.Attacks);
  if (items.length == 0) {
    setItems([{ Weapon: "", Damage: 1, Other: "" }]);
  }

  // Handle a change in the value of an item in the table
  const handleChange = (index, value, location) => {
    console.log(
      "my index is " + index + " and value is " + value + " and is " + location
    );
    const newItems = [...items];
    //newItems[index] = value;
    newItems[index] = { ...newItems[index], [location]: value };
    character.Attacks = newItems;
    setItems(newItems);
    onChange(character);
  };

  // Handle the click of the "-" button to delete a row
  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    character.Attacks = newItems;
    setItems(newItems);
    onChange(character);
  };

  // Handle the click of the "+" button to add a new row
  const handleAddRow = () => {
    const newItems = [...items, { Weapon: "", Damage: 1, Other: "" }];
    character.Attacks = newItems;
    setItems(newItems);
    onChange(character);
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Weapon</td>
            <td>Damage</td>
            <td>Traits</td>
          </tr>
          {items.map((item, index) => (
            <tr>
              <td>
                <input
                  type="text"
                  value={item.Weapon}
                  onChange={(e) =>
                    handleChange(index, e.target.value, "Weapon")
                  }
                />
              </td>
              <td>
                <input
                  style={{ width: "50px", textAlign: "center" }}
                  type="text"
                  value={item.Damage}
                  onChange={(e) =>
                    handleChange(index, e.target.value, "Damage")
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.Other}
                  onChange={(e) => handleChange(index, e.target.value, "Other")}
                />
              </td>
              <td>
                {items.length == 1 ? null : (
                  <button onClick={() => handleDelete(index)}>-</button>
                )}
              </td>
            </tr>
          ))}
          <tr>
            <button onClick={() => handleAddRow()}>+</button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Attacks;
