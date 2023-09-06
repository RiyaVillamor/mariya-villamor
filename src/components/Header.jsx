import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Header.scss';
import CustomModal from '../components/Modal'; // Import the Modal component

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Add state for the modal

  const openModal = () => {
    setIsModalOpen(true); // Function to open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Function to close the modal
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-nav">
          <NavLink to="/" className="header-logo">
            <img src="/mariya.png" alt="mariya-logo" />
          </NavLink>
          <ul>
            <li><NavLink exact={true} to="/home" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="#" activeClassName="active" onClick={openModal}>About</NavLink></li>
            <li>
              <NavLink
                to="#"
                activeClassName="active"
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
            <li><NavLink to="#" activeClassName="active">Contact</NavLink></li>
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
      {/* Check if the modal should be open and render it */}
      {isModalOpen && (
        <CustomModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          websiteData={
            // Pass valid website data here
            {
              websiteTitle: 'MARIYA',
              summary: 'a passionate web developer with a love for creating amazing web experiences. I enjoy working on both front-end and back-end technologies and am always excited to take on new challenges.',
              backgroundImageUrl: '/mariyaposter1.png',
              collaborator: null,
              githubLink: 'https://github.com/RiyaVillamor/mariya-villamor',
              vercelLink: 'https://mariyavillamor.vercel.app/',
              similarWebsites: [
                { name: 'Similar Website 1', imageUrl: '/nexus1.png' },
                { name: 'Similar Website 2', imageUrl: '/techblazers1.png' },
              ],
            }
          }
        />
      )}
    </header>
  );
};

export default Header;
