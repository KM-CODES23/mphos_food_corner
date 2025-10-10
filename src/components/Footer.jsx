import React from 'react'
import { Link } from "react-router-dom";
import '../styles.css'
import logo from '../assets/logo.jpg'
function Footer() {
const navLinks = [
    { to: '/', label: 'Home' },
    
    { to: '/contact', label: 'Contact' },
    { to: '/about', label: 'About' },
    { to: '/profile', label: 'Profile' },
];

return (
    <footer className="footer">
        <div className="col">
            <img src={logo} alt="Mphos food corner" className="logo" loading="lazy" />

            <h4>Contact</h4>
            <p><strong>Address:</strong> Central Campus, 26 Scanlan St, New Park, Kimberley, 8301</p>
            <p><strong>Phone:</strong> (+27) 71 987 5474/(+27) 61 407 5624</p>

            <div className="follow">
                <h4>follow us</h4>
                <div className="icon">
                    <a href="https://www.facebook.com/p/Mphos-Food-Corner-61556538898126/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-link">
            {navLinks.map(({ to, label }) => (
                <Link key={to} className="footer-link" to={to}>{label}</Link>
            ))}
        </div>

        <div className="footer-copyright">
            <p>Copyright © 2025 Mphos Food Corner. All rights reserved</p>
        </div>
    </footer>
)
}

export default Footer