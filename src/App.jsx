import './App.css';
import TodoList from './components/TodoList';
import backGround from './images/Background.png'

function App() {
  return (
    <div className="container">
      <div className="linear"><img src={backGround} alt="background image" /></div>
      <TodoList />
    </div>
  );
}

export default App;
