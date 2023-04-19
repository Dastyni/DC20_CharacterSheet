import React, { useState, useEffect } from "react";

const OutdatedSheet = ({ character, index, callbacks }) => {
  const { onChange, onDelete, onUnSelect } = callbacks;

  // const storedData = JSON.parse(localStorage.getItem("DCchar"));
  // const newCharacters = storedData.filter((_, i) => i !== index);
  // localStorage.setItem("DCchar", JSON.stringify(newCharacters));

  const handleDelete = (index) => {
    console.log("Asking to delete index ", index);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      console.log("attempting to delete index ", index);
      onDelete(index);
    }
  };

  return (
    <div>
      <p
        onClick={() => {
          handleDelete(index);
        }}
      >
        <button className="button-24">Delete</button>
      </p>
      <p
        onClick={() => {
          onUnSelect();
        }}
      >
        <button className="button">Back</button>
      </p>
      {Object.entries(character).map(([key, value]) => (
        <p key={key}>
          {key}: {JSON.stringify(value)}
        </p>
      ))}
    </div>
  );
};

export default OutdatedSheet;
