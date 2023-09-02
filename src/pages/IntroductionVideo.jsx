import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import '../styles/IntroductionVideo.scss';

const IntroductionVideo = ({ onVideoEnd }) => {
  const [videoPlayed, setVideoPlayed] = useState(false);

  // Function to handle the video end event
  const handleVideoEnd = () => {
    setVideoPlayed(true);
    onVideoEnd();
  };

  useEffect(() => {
    setTimeout(() => {
      onVideoEnd();
    }, 8000);
  }, [onVideoEnd]);

  return (
    <div className="introduction-video">
      {/* Video player for the introduction */}
      <div className="video-container">
        <ReactPlayer
          width="100vw"
          height="100vh"
          url="./logo.mp4"
          playing={!videoPlayed}
          loop={false}
          muted={true}
          onEnded={handleVideoEnd}
          onError={(e) => {
            console.error('Error playing video:', e);
          }}
        />
      </div>
    </div>
  );
};

export default IntroductionVideo;