import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Modal.scss';

// Set appElement to prevent "React-modal" app screen reader warnings
Modal.setAppElement('#root');

const CustomModal = ({ imageUrl, isOpen, onRequestClose }) => {
  const similarWebsites = [
    { name: 'Similar Website 1', imageUrl: '/nexus.png' },
    { name: 'Similar Website 2', imageUrl: '/nexus.png' },
    { name: 'Similar Website 3', imageUrl: '/nexus.png' },
    // Add more similar websites here
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <div className="modal-body">
          <div className="modal-header">
            <button className="close-button" onClick={onRequestClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <img src={imageUrl} alt="website Poster" />
          <div className="button-and-links">
            <button className="play-button">
              <FontAwesomeIcon icon={faPlay} /> Play
            </button>
            <div className="website-links">
              <a href="https://github.com/yourgithublink" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://vercel.com/yourvercellink" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
          <div className="website-info">
            <h2>Website Title</h2>
            <p>2023 | 1h 58m | Genre</p>
            <p>Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet aliquam arcu. Nulla facilisi.</p>
            <p>Collaborator: Wanda Arf</p>
          </div>
          <div className="more-like-this">
            <h3>More Like This</h3>
            <div className="similar-websites">
              {similarWebsites.map((website, index) => (
                <div className="similar-website" key={index}>
                  <img src={website.imageUrl} alt={website.name} />
                  <p>{website.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
