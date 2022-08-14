import React from "react";
import "../styles/Todo.scss";
import "../styles/CheckBox.css";
import { RiDeleteBin5Line } from "react-icons/ri";
const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheck = () => {
    toggleComplete(todo.id);
  };
  const handleDelete = () => {
    removeTodo(todo.id);
  };
  return (
    <div className="todoItem">
      <label className="control control-checkbox">
        <input
          className="checkInput"
          type="checkbox"
          onClick={handleCheck}
          defaultChecked={todo.completed ? true : false}
        />
        <div className="control_indicator"></div>
      </label>
      <p id="text" className={todo.completed ? "done" : null}>
        {todo.title}
      </p>
      <RiDeleteBin5Line className="deleteItem" onClick={handleDelete} />
    </div>
  );
};

export default Todo;
