import React from 'react'
import '../styles/Footer.css'
const Footer = ({todos,removeAllTodo,count}) => {
   
    const handleDelAll = () =>{
        removeAllTodo()
      }
  return (
    <div className='footer'>
      <div className="info">
        <div className="left">
        <p className='sum'>Ümumi: {todos.length} tapşırıq</p> 
        <p> Hazır: {count} tapşırıq</p>

        </div>
        <div className="right">
        <span onClick={handleDelAll}>Hamısını sil</span>

        </div>
      </div>
    </div>
  )
}

export default Footer