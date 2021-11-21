import React from "react";
import { useState } from "react/cjs/react.development";
import { Form } from "./todoform";
import { Task } from "./task";
let i = 0;
export function Todo(props) {
  const [todos, setTodos] = useState(props.todos);
  return (
    <>
      {console.log(todos)}
      {todos.map((task) => {
        i++;
        return (
          <Task key={i} todos={todos} setTodos={setTodos} task={task} id={i} />
        );
      })}
      <Form todos={todos} setTodos={setTodos} />
      <p>total task {todos.length}</p>
    </>
  );
}
