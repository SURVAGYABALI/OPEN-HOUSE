import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import TechnicalClubs from './pages/TechnicalClubs';
import CulturalClubs from './pages/CulturalClubs';
import VisitorInfo from './pages/VisitorInfo';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/technical-clubs" element={<TechnicalClubs />} />
            <Route path="/cultural-clubs" element={<CulturalClubs />} />
            <Route path="/visitor-info" element={<VisitorInfo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;