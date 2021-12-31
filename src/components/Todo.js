import React from "react";

function Todo(props) {
  const todos = props.todo;
  return (
    <div>
      {todos.map((todo, index) => {
        return <div key={index}>{todo.text}</div>;
      })}
    </div>
  );
}

export default Todo;
