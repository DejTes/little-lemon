import React from "react";
import "../styles/Footer.css";
import Logo from "../images/footer-logo.png";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-background">
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon logo" />
          <p>
          Little Lemon is a charming and vibrant restaurant nestled in the heart of Chicago. At Little Lemon, we pride ourselves on creating a delightful dining experience that combines exceptional flavors, warm hospitality, and a touch of contemporary elegance.
          </p>
          <div className="footer-content">
            <div className="locations">
              <h5>Navigation</h5>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/menu">Menu</a>
                </li>
                <li>
                  <a href="/reservations">Reservation</a>
                </li>
                <li>
                  <a href="/orderonline">Order Online</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
            </div>
            <div className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul>
                <li>Mon - Fri: 9:00AM - 12:00AM</li>
              </ul>
            </div>
            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Email: info@littlelemon.com</li>
              </ul>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
