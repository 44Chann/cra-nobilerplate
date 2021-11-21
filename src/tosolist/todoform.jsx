import React from "react";
import { useState } from "react";

export function Form(props) {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>

      <button onClick={handleClick}>Square</button>
    </>
  );

  function handleClick(e) {
    props.setTodos(() => {
      let newTodo = [...props.todos, inputValue];
      setInputValue("");
      return newTodo;
    });
  }
}
