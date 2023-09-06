import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Header.scss';
import CustomModal from '../components/Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-nav">
          <NavLink to="/" className="header-logo">
            <img src="/mariya.png" alt="mariya-logo" />
          </NavLink>
          <ul>
            <li><NavLink
              to="#"
              activeclassname="active"
              onClick={() => {
                const continueWatchingSection = document.getElementById('home');
                if (continueWatchingSection) {
                  continueWatchingSection.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
            >
              Home
            </NavLink>
            </li>
            <li><NavLink to="#" activeclassname="active" onClick={openModal}>About</NavLink></li>
            <li>
              <NavLink
                to="#"
                activeclassname="active"
                onClick={() => {
                  const continueWatchingSection = document.getElementById('continue-watching');
                  if (continueWatchingSection) {
                    continueWatchingSection.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                Projects
              </NavLink>
            </li>
            <li><NavLink to="#" activeclassname="active">Contact</NavLink></li>
          </ul>
        </div>
        <div className="header-icons">
          <FontAwesomeIcon icon={faMoon} />
          <a href="https://github.com/RiyaVillamor" target="_blank" rel="noopener noreferrer" className="github-link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://drive.google.com/drive/folders/15w5fVG5pQ9zbEk40g6BIn0hH6LOzddpK" target="_blank" rel="noopener noreferrer" className="resume-link">
            <FontAwesomeIcon icon={faFilePdf} /> <span>Resume</span>
          </a>
        </div>
      </div>
      {isModalOpen && (
        <CustomModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          websiteData={{
            websiteTitle: 'MARIYA',
            summary: 'A passionate web developer with a love for creating amazing web experiences. I enjoy working on both front-end and back-end technologies and am always excited to take on new challenges.',
            backgroundImageUrl: '/mariyaposter1.png',
            backgroundImageUrlWText: '/mariyaposter.png',
            collaborator: null,
            techStackImages: ['/javascript.png', '/react.png', '/sass.png'],
            githubLink: 'https://github.com/RiyaVillamor/mariya-villamor',
            vercelLink: 'https://mariyavillamor.vercel.app/',
            similarWebsites: [
              { name: 'Nexus', imageUrl: '/nexus.png' },
              { name: 'Techblazers', imageUrl: '/techblazers.png' },
              { name: 'Exploredia', imageUrl: '/exploredia.png' },
              { name: 'Cùsina', imageUrl: '/cusina.png' },
            ],
          }}
        />
      )}
    </header>
  );
};

export default Header;
