import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './HomePage/Home';
import About from './About/About';
import AllCourses from './CourseSection/AllCourses';
import Login from './LoginPage/Login/Login';
import Dashboard from "./DashBoard/dashboard"
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<AllCourses/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

