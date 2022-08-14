import React from "react";
import Todo from "./Todo";
import "../styles/TodoList.scss";
const TodoList = ({ todoArray, toggleComplete, removeTodo }) => {
  return (
    <div className="todoList">
      {todoArray.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
