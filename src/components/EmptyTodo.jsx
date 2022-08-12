import React from 'react'
import image from '../images/image1.png'

import '../styles/EmptyTodo.css'
const EmptyTodo = () => {
  return (
    <div className='empty'>
        <img src={image} alt="Tapshiriq yoxdur" />
    </div>
  )
}

export default EmptyTodo