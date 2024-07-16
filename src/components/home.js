


import React from 'react';
import './home.css'; // Assuming you have a separate CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Discover Your Perfect Activity</h1>
        <p className="home-description">
          Not sure what to do today? Let us guide you based on your mood and interests. Whether
          you're feeling adventurous, relaxed, or curious, we have a curated list of activities
          just for you.
        </p>
      </div>
      <div className="parallax-container">
        <div className="parallax"></div>
      </div>
    </div>
    
  );
};

export default Home;
