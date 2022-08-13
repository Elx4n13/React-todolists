import React, { useEffect } from "react";
import { useState } from "react";
import Footer from "./Footer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "../styles/TodoList.css";
import EmptyTodo from "./EmptyTodo";
const TodoList = () => {
  // todolarimizi elde etmek ve rahatliqla set etmek ucun
  const [resultTodos, setResultTodos] = useState(getItemLocalStorage());

  //hazir olan tapshiriqlarin sayin gostermek ucun
  let [count, setCount] = useState(0);

  //her render olunduqda DOM bizim hazrki todolarimizi locala gondersin ve hazr olan tapshiriq sayin yeniden hesablasin
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(resultTodos));
    completedTodo();
  }, [resultTodos]);

  //todolarimiz ucun uniqie key olaraq id nin hesablanmasi funksiyasi
  const gentId = (todos) => {
    if (todos.length != 0) {
      return todos.sort((a, b) => b.id - a.id)[0].id + 1;
    } else if (todos.length == 0) {
      return 1;
    }
  };

  // localdan todolarimizi gotrmek ucun
  function getItemLocalStorage() {
    let todos;
    if (localStorage.getItem("todos") !== null) {
      todos = JSON.parse(localStorage.getItem("todos"));
    } else {
      todos = [];
    }
    return todos;
  }

  // locala daxil edilen todonu gondermek ucun
  function addTodoLocalStorage(newTodo) {
    let todos;
    todos = getItemLocalStorage();
    todos = [
      ...todos,
      { id: gentId(todos), title: newTodo.text, completed: false },
    ];
    localStorage.setItem("todos", JSON.stringify(todos));
    setResultTodos(getItemLocalStorage());
  }
  //daxil edilen todonu yoxlayiriq bosh deyer daxil edilibse todonu elave etmirik
  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }
    addTodoLocalStorage(todo);
  };

  //hazir olan todonun completedin deyishirik
  const completeTodo = (id) => {
    setResultTodos(
      resultTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  //hazir olan todolari sayiriq
  const completedTodo = () => {
    const doneTodo = resultTodos.filter((item) => item.completed);
    setCount(doneTodo.length);
  };
  //her todonu silmek ucun isdifade edirik
  const removeTodo = (id) => {
    setResultTodos(resultTodos.filter((todo) => todo.id !== id));
  };
  //umumi todolari silmek ucun
  const removeAllTodo = () => {
    setResultTodos([]);
  };
  return (
    <div className="todo-container">
      <h1>TODO</h1>
      <TodoForm onSubmit={addTodo} />

      {/* Egerki bizim todolarimiz varsa Todo komponentin yoxdursa EmptyTodo komponentin qaytarir */}
      {resultTodos.length !== 0 ? (
        <div className="todos">
          {resultTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <Footer
            count={count}
            removeAllTodo={removeAllTodo}
            todos={resultTodos}
          />
        </div>
      ) : (
        //  eger false qaytararsa
        <div className="emptys">
          <EmptyTodo />
          <Footer
            count={count}
            removeAllTodo={removeAllTodo}
            todos={resultTodos}
          />
        </div>
      )}
    </div>
  );
};

export default TodoList;
