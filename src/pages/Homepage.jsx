import React from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'
import logo from '../assets/logo.jpg'
const Homepage = () => {
  return (
    <section className='welcome-section'>
        <div className='container'>
            <img src={logo} alt="Mpho's Food Corner" className='navbar-logo' />
            <h2 className='welcome-banner-title'>Welcome To Mpho's Food Corner</h2>
            <p className='section-description'>"Your campus kitchen for tasty, quick, and cheap eats."</p>
            <Link to="/menu" className='btn btn-primary welcome-section-btn'>Explore Our Menu</Link>
        </div>

    </section>

  )
}

export default Homepage