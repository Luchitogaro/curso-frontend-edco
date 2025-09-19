import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ReturnToTop from './components/ReturnToTop';
import Home from './pages/Home';
import Session from './pages/Session';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-content">
          <Sidebar />
          <motion.main 
            className="main-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sesion/:id" element={<Session />} />
            </Routes>
          </motion.main>
        </div>
        
        {/* Return to Top Button - Global */}
        <ReturnToTop />
      </div>
    </Router>
  );
}

export default App;