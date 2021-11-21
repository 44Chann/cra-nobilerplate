import React from "react";

export function Task(props) {
  return (
    <>
      <ul>
        <li key={props.id} onClick={handleDel}>
          {props.task}
        </li>
      </ul>
    </>
  );

  function handleDel(e) {
    props.setTodos(() => {
      let oldarray = [...props.todos];
      oldarray.pop(oldarray.indexOf(props.task));
      return oldarray;
    });
  }
}
