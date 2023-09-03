import React from 'react';
import '../styles/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Top10Websites from '../components/Top10Websites';

const Home = () => {
  return (
    <div className="home">
      <div className="background-poster">

      </div>
      <div className="home-body">
        <div className="header-logo">
          <img
            src="./favicon.png"
            alt="mariya-logo"
          />
        </div>
        <div className="series">
          <p>Hello, I'm</p>
        </div>
        <div className="website-title">
          {/* website title */}
          <h1>MARIYA</h1>
        </div>
        <div className="summary">
          {/* website summary */}
          <p>
            a passionate web developer with a love for creating
            amazing web experiences. I enjoy working on both front-end and back-end
            technologies and am always excited to take on new challenges.
          </p>
        </div>
        <div className="buttons">
          <button className="play-button">
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
          <button className="info-button">
            <FontAwesomeIcon icon={faInfoCircle} /> More Info
          </button>
        </div>
        <Top10Websites />
      </div>
    </div>
  );
};

export default Home;