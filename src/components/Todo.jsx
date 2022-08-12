import React from 'react'
import '../styles/Todo.css'
import {RiDeleteBin5Line} from 'react-icons/ri'
const Todo = ({todo,completeTodo,removeTodo}) => {
  //bitirmish oldugumuz todonun idsin todoliste gonderirik
  const handleChecked =()=>{
   completeTodo(todo.id)
  }
  //silmek isdediyimiz todonun idsin todoliste gonderirik
  const handleDel = () =>{
    removeTodo(todo.id)
  }
  return (
    <div className='todosList'>
      <input id="checkBox"type="checkbox" onClick={handleChecked} defaultChecked={todo.completed ? true:false} />
      <p id="todoTitle"className={todo.completed ? 'done':'undone'}>{todo.title}        {todo.completed}</p>
      <RiDeleteBin5Line className='deleteIcon' onClick={handleDel}/>
    </div>
  )
}

export default Todo