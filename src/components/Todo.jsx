import React from 'react'
import '../styles/Todo.css'
import '../styles/CheckBox.css'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Todo = ({todo,completeTodo,removeTodo}) => {
  //bitirmish oldugumuz todonun idsin todoliste gonderirik
  const handleChecked =()=>{
   completeTodo(todo.id)
  }
  //silmek isdediyimiz todonun idsin todoliste gonderirik
  const handleDel = () =>{
    toast.error('Tapshiriq silindi')
    removeTodo(todo.id)
  }
  return (
    <div className='todosList'>
      <label class="control control-checkbox">
            <input type="checkbox" onClick={handleChecked} defaultChecked={todo.completed ? true:false} />
            <div class="control_indicator"></div>
        </label>
      <p id="todoTitle"className={todo.completed ? 'done':'undone'}>{todo.title}        {todo.completed}</p>
      <RiDeleteBin5Line className='deleteIcon' onClick={handleDel}/>
      <ToastContainer />
    </div>
  )
}

export default Todo