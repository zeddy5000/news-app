import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Button from './Button'



const NavBar = () => {
  
  return (
    <div className='nav-container'>
        <div className='nav-logo'>
            <h1><Link to='/' className='logo-link'>MockNews</Link></h1>
        </div>
       
        <div className='nav-elements'>
            <ul className='nav-links-container'>
                <li ><Link to='/' className='nav-link'>Home</Link></li>
                <li ><Link to='/about' className='nav-link'>About</Link></li>
                <li  ><Link to='/' className='nav-link'>Sign Up</Link></li>  
            </ul>
        </div>
    </div>
  )
}

export default NavBar