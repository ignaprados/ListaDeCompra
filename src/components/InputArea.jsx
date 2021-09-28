import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      props.onAdd(inputText);
      setInputText("");
    }
    event.persist();
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        type="text"
        value={inputText}
        onKeyPress={(event) => handleKeyPress(event)}
      />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Agregar</span>
      </button>
    </div>
  );
}

export default InputArea;
