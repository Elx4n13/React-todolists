import React from 'react'
import '../styles/Footer.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Footer = ({todos,removeAllTodo,count}) => {
   
    const handleDelAll = () =>{
        removeAllTodo()
        toast.error('Tapshiriqlarin hamisi silindi')
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
        <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Footer