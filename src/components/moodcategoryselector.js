// src/components/mood.js

import React from "react";
import './mood.css';



const MoodCategorySelector = ({ onSelectMood, onSelectCategory }) => {
  const moods = [
    "Adventurous",
    "Relaxed",
    "Creative",
    "Calm",
    "Emotional",
    "Sad",
    "Intellectual",
    "Curious",
  ];
  const categories = ["Outdoor", "Wellness", "Indoor", "Educational"];

  return (
    <div className="selector-container">
      <div className="selector-box">
        <h2 className="selector-heading">Select Your Mood:</h2>
        <select className="selector" onChange={(e) => onSelectMood(e.target.value)}>
          <option value="">Choose a Mood...</option>
          {moods.map((mood, index) => (
            <option key={index} value={mood}>
              {mood}
            </option>
          ))}
        </select>
      </div>

      <div className="selector-box">
        <h2 className="selector-heading">Select a Category:</h2>
        <select className="selector" onChange={(e) => onSelectCategory(e.target.value)}>
          <option value="">Choose a Category...</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MoodCategorySelector;


