import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
     <Link to='/'><button className='home button'>Home</button></Link>
     <Link to='/about'><button className='about button'>About</button></Link>
     <Link to='/contact'><button className='contact button'>Contact</button></Link>
     <Link to='/register'><button className='register button'>Register</button></Link>
     <Link to='/login'><button className='login button'>Login</button></Link>
    </div>
  )
}

export default Navbar