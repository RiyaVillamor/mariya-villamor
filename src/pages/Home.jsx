import React, { useState } from 'react';
import '../styles/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Top10Websites from '../components/Top10Websites';

const Home = () => {
  const websiteConfigs = [
    {
      seriesTitle: 'Hello, I\'m',
      websiteTitle: 'MARIYA',
      summary: 'a passionate web developer with a love for creating amazing web experiences. I enjoy working on both front-end and back-end technologies and am always excited to take on new challenges.',
      backgroundImageUrl: '/mariyaposter1.png'
    },
    {
      seriesTitle: 'We link Worlds',
      websiteTitle: 'NEXUS',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur aliquet est, eget egestas metus congue vel. Donec sed urna sed tellus venenatis hendrerit. Nulla facilisi. Sed tristique tortor nec scelerisque.',
      backgroundImageUrl: '/nexus1.png'
    },
    {
      seriesTitle: 'Introducing Canvas 2.0',
      websiteTitle: 'TECHBLAZERS',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet aliquam arcu. Nulla facilisi. Proin fringilla quam ac odio auctor facilisis. Vivamus auctor neque eu lectus egestas, at vulputate velit euismod.',
      backgroundImageUrl: '/techblazers1.png'
    },
    {
      seriesTitle: 'Your Ultimate Country Guide',
      websiteTitle: 'EXPLOREDIA',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet aliquam arcu. Nulla facilisi. Proin fringilla quam ac odio auctor facilisis. Vivamus auctor neque eu lectus egestas, at vulputate velit euismod.',
      backgroundImageUrl: '/exploredia1.png'
    },
    {
      seriesTitle: 'Go On. Get your recipe out.',
      websiteTitle: 'CUISINA',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet aliquam arcu. Nulla facilisi. Proin fringilla quam ac odio auctor facilisis. Vivamus auctor neque eu lectus egestas, at vulputate velit euismod.',
      backgroundImageUrl: '/cuisina1.png',
    },
    // Add more configurations for other websites
  ];

  const [currentWebsite, setCurrentWebsite] = useState(websiteConfigs[0]);

  const handleWebsiteChange = (configIndex) => {
    setCurrentWebsite(websiteConfigs[configIndex]);
  };

  return (
    <div className="home">
      <div className="background-poster" style={{ backgroundImage: `url(${currentWebsite.backgroundImageUrl})` }}></div>
      <div className="home-body">
        <div className="header-logo">
          <img
            src="./favicon.png"
            alt="mariya-logo"
          />
        </div>
        <div className="series">
          <p>{currentWebsite.seriesTitle}</p>
        </div>
        <div className="website-title">
          <h1>{currentWebsite.websiteTitle}</h1>
        </div>
        <div className="summary">
          <p>{currentWebsite.summary}</p>
        </div>
        <div className="buttons">
          <button className="play-button">
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
          <button className="info-button">
            <FontAwesomeIcon icon={faInfoCircle} /> More Info
          </button>
        </div>
        <Top10Websites handleWebsiteChange={handleWebsiteChange} />
      </div>
    </div>
  );
};

export default Home;
