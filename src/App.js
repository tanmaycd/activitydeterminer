// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./components/home";
// import ActivitiesFinder from "./components/activityfinder";
// import "./App.css";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="navbar">
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/activities">Activities Finder</Link></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route exact path="/" element={<Home/>} />
//           <Route path="/activities" element={<ActivitiesFinder/>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home";
import ActivitiesFinder from "./components/activityfinder";
import "./App.css";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/activities">Activities Finder</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/activities" element={<ActivitiesFinder />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
