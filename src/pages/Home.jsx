import React, { useState } from 'react';
import '../styles/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Top10Websites from '../components/Top10Websites';
import Modal from '../components/Modal';

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
      summary: 'a vibrant social networking platform, fostering connections, and empowering expression. It offers unique profiles, tailored content, and top-notch privacy for a fulfilling online experience. Join nexus now!',
      backgroundImageUrl: '/nexus1.png'
    },
    {
      seriesTitle: 'Introducing Canvas 2.0',
      websiteTitle: 'TECHBLAZERS',
      summary: ' is your go-to resource for web development. With a comprehensive library, coding language updates, and a vibrant community, it is the hub for aspiring developers. Dive in and blaze your tech trail.',
      backgroundImageUrl: '/techblazers1.png'
    },
    {
      seriesTitle: 'Your Ultimate Country Guide',
      websiteTitle: 'EXPLOREDIA',
      summary: 'is your gateway to global discovery. It offers flags, capitals, currencies, and essential information, empowering travelers, students, and explorers to explore the world effortlessly.',
      backgroundImageUrl: '/exploredia1.png'
    },
    {
      seriesTitle: 'Go On. Get your recipe out.',
      websiteTitle: 'CUISINA',
      summary: 'is a culinary haven for Filipinos seeking daily meal inspiration. With step-by-step recipes, course filters, and skill-building, it simplifies cooking for college students, solo-living adolescents, and adults.',
      backgroundImageUrl: '/cuisina1.png',
    },
    // Add array for other websites soon
  ];

  const [currentWebsite, setCurrentWebsite] = useState(websiteConfigs[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWebsiteChange = (configIndex) => {
    setCurrentWebsite(websiteConfigs[configIndex]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          <button className="info-button" onClick={openModal}>
            <FontAwesomeIcon icon={faInfoCircle} /> More Info
          </button>
        </div>
        <Top10Websites handleWebsiteChange={handleWebsiteChange} />
      </div>
      {/* Check if the modal should be open and render it */}
 
        <Modal
        imageUrl={currentWebsite.backgroundImageUrl}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      />
    </div>
  );
};

export default Home;