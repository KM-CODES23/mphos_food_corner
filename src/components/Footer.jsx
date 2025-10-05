import React from 'react'
import { Link } from "react-router-dom";
import '../styles.css'
import logo from '../assets/logo.jpg'
function Footer() {
  return (
    <footer className="footer">
            <div className="col">
            


                <img src={logo} alt="Vuka Mjita logo" className="logo" loading="lazy"/>

                <h4>Contact</h4>
                <p><strong>Address:</strong> 35 Edwards RD, Kimberly, Kimberly</p>
                <p><strong>Phone:</strong> (+27) 71 987 5474/(+27) 61 407 5624</p>
                 
                
                    <div className="follow">
                    <h4>follow us</h4>
                    <div className="icon">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
                    </div>
                        

                    </div>
</div>
                    <div className="col">
                    <h4>About</h4>
                <Link to="about.html">About Us</Link>
                <Link to="#">Delivery Information</Link>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Term & Conditions</Link>
                <Link to="/Contact">Contact Us</Link>
            </div>

                    

                    
            <div className="footer-link">
             <Link className="footer-link" to="/">Home</Link>
                        <Link className="footer-link" to="/Resources">Resources</Link>
                        <Link className="footer-link" to="/Shop">Shop</Link>
                        <Link className="footer-link" to="/Contact">Contact Us</Link>
                        <Link className="footer-link"  to="/about">About Us</Link>
                        <Link className="footer-link" to="/profile">Profile</Link>
            </div>
                    <div className="footer-copyright">
                    
                      
                    
                        <p>Copyright © 2025 Vuka Mjita. All rights reserved</p>
                    </div>

                    
                
            
        </footer>
  )
}

export default Footer