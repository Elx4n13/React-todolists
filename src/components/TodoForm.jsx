import React from 'react'
import { useState } from 'react'
import '../styles/TodoForm.css'
const TodoForm = (props) => {
    // Inputa daxil edilen deyer
    const [inputValue,setInputValue] = useState('');
    //inputda edilen deyishiklik
    const handleChange = (e)  =>{
        setInputValue(e.target.value)
    }

    //TodoListe inputa daxil etdiyimiz deyeri gonderirik
    const handleSubmit = (e)=>{
        e.preventDefault()
        props.onSubmit({
            text :inputValue.trim()
        })
        setInputValue('')
    }
  return (
    <div className="formDiv">
    <form className='todoForm' onSubmit={handleSubmit}>
    <input type="text" id='todoInput' placeholder='Tapşırığı daxil edin' value={inputValue} name='todoName' className='todoInput' onChange={handleChange}/>
    <button className='add-button'>+</button>
</form>
    </div>

  )
}

export default TodoForm