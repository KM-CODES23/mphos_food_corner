import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import "../styles.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔹 Check login status on mount
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  // 🔹 Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* --- Logo Section --- */}
        <div className="navbar-left" onClick={() => navigate("/")}>
          <img src={logo} alt="Mpho's Food Corner" className="navbar-logo" />
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
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button className="login-button">Login</button>
              </Link>
              <Link to="/signup">
                <button className="signup-button">Sign Up</button>
              </Link>
            </>
          ) : (
            <>
              <button
                className="order-now-button"
                onClick={() => navigate("/menu")}
              >
                Order Now
              </button>
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
