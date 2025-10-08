import React from 'react'
import '../styles.css'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="mpho's food corner" className="navbar-logo" />
        </div>

        <div className="navbar-right">
          <ul className="navbar-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/menu" className="nav-link">Menu</Link></li>
            <li><Link to="/" className="nav-link">About</Link></li>
            <li><Link to="/" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
