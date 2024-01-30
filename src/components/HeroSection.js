import React from 'react';
import "../styles/HeroSection.css";
import gourmet from "../images/gourmet.jpg"

const HeroSection = () => {
  return (
    <div className="hero-section-background">
        <div className="hero-section-container">
            <div className="section-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="btn">Reserve a Table</button>

            </div>
            <div className="section-right">
                <div className="image-box">
                    <img src={gourmet} alt="Serving delicious dish" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
