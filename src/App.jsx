import React from "react";
import TodosContainer from "./components/TodosContainer";
import background from "./images/background.png";
import "./App.css";
const App = () => {
  return (
    <div className="container">
      <div className="background">
        <img src={background} alt="Background img" />
      </div>
      <TodosContainer />
    </div>
  );
};

export default App;
