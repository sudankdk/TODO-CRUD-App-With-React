import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleTodos, todoValues, setTodoValues } = props;

  return (
    <header>
      <input
        value={todoValues}
        onChange={(e) => {
          setTodoValues(e.target.value);
        }}
        placeholder="Enter What TODO"
      />
      <button
        onClick={() => {
          handleTodos(todoValues);
          setTodoValues("");
        }}
      >
        ADD
      </button>
    </header>
  );
}
