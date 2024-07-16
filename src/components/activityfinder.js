// // src/components/ActivitiesFinder.js

// import React, { useState } from "react";
// import MoodCategorySelector from "./moodcategoryselector";
// import ActivityList from "./activitylist";
// import "./activityfinder.css";
// import { Parallax } from "react-parallax";
// // src/components/ActivitiesFinder.js
// import outdoorImage from './Screenshot 2024-07-16 105703.png';
// import indoorImage from './Screenshot 2024-07-16 110058.png';
// import educationalImage from './Screenshot 2024-07-16 110634.png';
// import wellnessImage from './Screenshot 2024-07-16 110821.png';
// import defaultimg from './Screenshot 2024-07-16 122132.png'
// const ActivitiesFinder = () => {
//   const [selectedMood, setSelectedMood] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const handleSelectMood = (mood) => {
//     setSelectedMood(mood);
//   };

//   const handleSelectCategory = (category) => {
//     setSelectedCategory(category);
//   };

//   const getCategoryBackground = () => {
//     switch (selectedCategory) {
//       case "Outdoor":
//         return outdoorImage;
//       case "Indoor":
//         return indoorImage;
//       case "Educational":
//         return educationalImage;
//       case "Wellness":
//         return wellnessImage;
//       default:
//         return defaultimg;
//     }
//   };

//   return (   <div>
//     {/* Parallax for ActivitiesFinder title section */}
//     <Parallax bgImage={getCategoryBackground()} strength={500} blur={{ min: -15, max: 15 }}>
//       <div className="parallax-content activities-finder">
//         <h1 className="activities-finder-title">Find Activities</h1>
//         <MoodCategorySelector
//           onSelectMood={handleSelectMood}
//           onSelectCategory={handleSelectCategory}
//         />
//       </div>
//     </Parallax>
    
//     {/* Parallax for ActivityList section */}
//     <Parallax bgImage={getCategoryBackground()} strength={500} blur={{ min: -15, max: 15 }}>
//       <div className="activity-list">
//         <ActivityList selectedMood={selectedMood} selectedCategory={selectedCategory} />
//       </div>
//     </Parallax>
//   </div>
//   );
// };

// export default ActivitiesFinder;

import React, { useState } from "react";
import MoodCategorySelector from "./moodcategoryselector";
import ActivityList from "./activitylist";
import "./activityfinder.css";

const ActivitiesFinder = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectMood = (mood) => {
    setSelectedMood(mood);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="activities-finder">
      <h1 className="activities-finder-title">Find Activities</h1>
      <MoodCategorySelector
        onSelectMood={handleSelectMood}
        onSelectCategory={handleSelectCategory}
      />
      <div className="activity-list-container">
        <ActivityList selectedMood={selectedMood} selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default ActivitiesFinder;
