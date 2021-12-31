import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(...todos);
  };

  return (
    <div className="TodoList">
      <h1>What is the plan for Today?</h1>

      <TodoForm onSubmit={addTodo} />
      <Todo todo={todos} />
    </div>
  );
}

export default TodoList;
