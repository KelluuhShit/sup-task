// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Blog from './pages/Blog';
import Affiliate from './pages/Affiliate';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surveys" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
