import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroductionVideo from './pages/IntroductionVideo.jsx';
import Section from './pages/Section.jsx';
import Header from './components/Header.jsx';
import Home from './pages/Home';
import Construction from './components/WebConstruction.jsx';

const App = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  // Callback function to handle video end event
  const handleVideoEnd = () => {
    setVideoEnded(true);
  };
  return (
    <>
      <Router>
        <div className="app">
          {!videoEnded ? (
            <IntroductionVideo onVideoEnd={handleVideoEnd} />
          ) : (
            <Routes>
              <Route path="/" element={
                <Section />
              } />
              <Route path="/home" element={
                <>
                  <Header />
                  <Home />
                  <Construction />
                </>
              } />
            </Routes>
          )}
        </div>
      </Router>
    </>
  );
};
export default App;