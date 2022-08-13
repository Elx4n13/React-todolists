import React from "react";
import { useState } from "react";
import "../styles/TodoForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TodoForm = (props) => {
  // Inputa daxil edilen deyer
  const [inputValue, setInputValue] = useState("");
  //inputda edilen deyishiklik
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //TodoListe inputa daxil etdiyimiz deyeri gonderirik
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      text: inputValue.trim(),
    });
    if (inputValue) {
      toast.success("Tapshiriq elave olundu");
    } else {
      toast.warning("Bosh deyer daxil ede bilmirseniz");
    }
    setInputValue("");
  };
  return (
    <div className="formDiv">
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="todoInput"
          placeholder="Tapşırığı daxil edin"
          value={inputValue}
          name="todoName"
          className="todoInput"
          onChange={handleChange}
        />
        <button className="add-button">+</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default TodoForm;
