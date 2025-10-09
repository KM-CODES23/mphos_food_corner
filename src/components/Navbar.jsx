import React, { useEffect, useState } from 'react';
import '../styles.css';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  // --- Simulated login state ---
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    const user = localStorage.getItem('user'); // stored after login
    setIsLoggedIn(!!user);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* --- Logo --- */}
        <div className="navbar-left">
          <img src={logo} alt="mpho's food corner" className="navbar-logo" />
        </div>

        {/* --- Center Links --- */}
        <div className="navbar-center">
          <ul className="navbar-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/menu" className="nav-link">Menu</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>

        {/* --- Right Section --- */}
        <div className="navbar-right">
          

          {/* Show these buttons only when user is NOT logged in */}
          {!isLoggedIn && (
             <>
              <Link to="/login"><button className="login-button">Login</button></Link>
              <Link to="/signup"><button className="signup-button">Sign Up</button></Link>
            </>
          )}

          {/* Show cart only when user IS logged in */}
          {isLoggedIn && (
            <>
              <button className="order-now-button">Order Now</button>
              <Link to="/cart" className="cart-icon">
                <FaShoppingCart size={22} />
              </Link>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </>
              
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
