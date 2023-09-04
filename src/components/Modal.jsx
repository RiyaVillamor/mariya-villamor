import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Modal.scss';

// Set appElement to prevent "React-modal" app screen reader warnings
Modal.setAppElement('#root');

const CustomModal = ({ websiteData, isOpen, onRequestClose }) => {
  const { websiteTitle, summary, collaborator, backgroundImageUrl, similarWebsites, githubLink, vercelLink } = websiteData;

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
          <img src={backgroundImageUrl} alt={`${websiteTitle} Poster`} />
          <div className="button-and-links">
            <button className="play-button">
              <FontAwesomeIcon icon={faPlay} /> Play
            </button>
            <div className="website-links">
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> 
                </a>
              )}
              {vercelLink && (
                <a href={vercelLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> 
                </a>
              )}
            </div>
          </div>
          <div className="website-info">
            <h2>{websiteTitle}</h2>
            <p>Summary: {summary}</p>
            {collaborator && <p>Collaborator: {collaborator}</p>}
          </div>
          <div className="more-like-this">
            <h3>More Like This</h3>
            <div className="similar-websites">
              {similarWebsites.map((similarWebsite, index) => (
                <div className="similar-website" key={index}>
                  <img src={similarWebsite.imageUrl} alt={similarWebsite.name} />
                  <p>{similarWebsite.name}</p>
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
