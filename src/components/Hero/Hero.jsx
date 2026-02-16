import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <p className="promo-text">Great Summer Sale | Up to 60% Off</p>
          <h1>Upgrade Your Home <br /> <span>With Top Brands</span></h1>
          <p className="description">
            Experience the best deals on electronics, kitchen appliances, and fashion. 
            Free delivery on your first order.
          </p>
          <div className="button-group">
            <button className="primary-btn">Shop the Sale</button>
            <button className="secondary-btn">View All Offers</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" 
            alt="Watch Showcase" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;