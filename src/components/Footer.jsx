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
        <span className='sum'>Ümumi: {todos.length} tapşırıq</span> 
        <span> Hazır: {count} tapşırıq</span>

        </div>
        <div className="right">
        <span onClick={handleDelAll}>Hamısını sil</span>

        </div>
      </div>
    </div>
  )
}

export default Footer