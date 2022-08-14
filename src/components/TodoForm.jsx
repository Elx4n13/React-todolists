import React, { useState } from "react";
import '../styles/TodoForm.scss'
const TodoForm = ({ addTodoTitle, warningToast }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodoTitle(inputValue);
      setInputValue("");
    } else {
      warningToast();
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tapşırığı daxil edin"
          value={inputValue}
          onChange={handleChange}
        />
        <button>+</button>
      </form>
    </div>
  );
};

export default TodoForm;
