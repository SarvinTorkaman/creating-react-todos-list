import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const updateSubmit = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={updateSubmit} />;
  }

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={index}
          >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
            </div>
            <div className="icons">
              <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className="remove-todo"
              />

              <GrEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className="edit-todo"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
