import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroductionVideo from './pages/IntroductionVideo.jsx';
import Section from './pages/Section.jsx';

const App = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  // Callback function to handle video end event
  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <>  <Router>
      <div className="app">
        {!videoEnded ? (
          <IntroductionVideo onVideoEnd={handleVideoEnd} />
        ) : (
          <Routes>
            <Route path="/" element={
              <Section />
            } />
          </Routes>
        )}
      </div>
    </Router>
    </>);
};

export default App;