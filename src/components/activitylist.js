// src/components/ActivityList.js

import React from "react";
import { activities } from "../data";


import './activitylist.css';

const ActivityList = ({ selectedMood, selectedCategory }) => {
    const filteredActivities = activities.filter(
      (activity) =>
        (!selectedMood || activity.moodLevel === selectedMood) &&
        (!selectedCategory || activity.category === selectedCategory)
    );
  
    return (
      <div className="activity-list">
        <h2>Available Activities</h2>
        <ul>
          {filteredActivities.map((activity) => (
            <li key={activity.id} className="activity-item">
              <div className="activity-content">
              <div className="activity-box">
                <h3>{activity.title}</h3>
                <p><strong>Category:</strong> {activity.category}</p>
                <p><strong>Description:</strong> {activity.description}</p>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ActivityList;
