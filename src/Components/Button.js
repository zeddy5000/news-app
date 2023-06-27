import React from 'react'
import './Button.css'

const Button = ({title,onSubmit}) => {
  return (
    <button className='search-btn' type='submit' onSubmit={onSubmit} >
        {title}
    </button>
  )
}

export default Button