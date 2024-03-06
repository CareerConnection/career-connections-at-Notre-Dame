import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../pages/NavBar';
import MainSection from "../pages/MainSection";
import LandingPage from "../pages/LandingPage";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="w-full px-8 min-h-[100vh] flex-col justify-center">
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<MainSection />} />
        </Routes>
      </div>
    </Router>
  );
}; 

export default App;
