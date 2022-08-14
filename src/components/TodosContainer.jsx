import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Empty from "./Empty";
import TodoList from "./TodoList";
import Footer from "./Footer";
import "../styles/TodosContainer.scss";
const TodosContainer = () => {
  const TODOS = "TODOS";
  const [todos, setTodos] = useState(getItemLocalStorage());
  useEffect(() => {
    const firstData = JSON.parse(localStorage.getItem(TODOS)) || [];
    if (firstData.length !== 0) {
      setTodos(firstData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);
  function getItemLocalStorage() {
    let todos;
    if (localStorage.getItem(TODOS) !== null) {
      todos = JSON.parse(localStorage.getItem(TODOS));
    } else {
      todos = [];
    }
    return todos;
  }
  const gentId = (todos) => {
    return todos.sort((a, b) => b.id - a.id)[0].id + 1;
  };
  const addTodo = (inputValue) => {
    if (todos.length !== 0) {
      setTodos([
        {
          id: gentId(todos),
          title: inputValue,
          completed: false,
        },
        ...todos,
      ]);
    } else {
      setTodos([
        {
          id: 1,
          title: inputValue,
          completed: false,
        },
      ]);
    }
    toast.success("Tapshiriq elave olundu");
  };
  const warningToast = () => {
    toast.warning("Bosh deyer daxil edile bilmez");
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          if (todo.completed) {
            toast.warning("Tapshiriq yerine yetirilmedi olaraq qeyd edildi");
          } else {
            toast.success("Tapshiriq yerine yetirildi");
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.warning("Tapshiriq silindi");
  };
  const sumOfComp = (todos) => {
    let count = 0;
    todos.map((todo) => {
      if (todo.completed) {
        count++;
      }
    });
    return count;
  };
  const allDelete = () => {
    setTodos([]);
    toast.warning("Hamisi silindi");
  };
  return (
    <div className="todoContainer">
      <h1>TODO</h1>
      <TodoForm addTodoTitle={addTodo} warningToast={warningToast} />
      {todos.length === 0 ? (
        <Empty />
      ) : (
        <TodoList
          todoArray={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      )}
      <Footer todos={todos} sumOfComp={sumOfComp} allDelete={allDelete} />
      <ToastContainer />
    </div>
  );
};

export default TodosContainer;
