import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Modal.scss';

Modal.setAppElement('#root');

const CustomModal = ({ websiteData, isOpen, onRequestClose }) => {
  const { websiteTitle, summary, collaborator, techStackImages, backgroundImageUrlWText, similarWebsites, githubLink, vercelLink } = websiteData;

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
          <img src={backgroundImageUrlWText} alt={`${websiteTitle} Poster`} />
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
            <p><span>Summary:</span> {summary}</p>
            <div className="tech-stack">
              <span>Technology Stack Used:</span>
              <div className="tech-stack">
                {techStackImages.map((image, index) => (
                  <img key={index} src={image} alt={`Tech Stack ${index + 1}`} />
                ))}
              </div>
              {collaborator && <p className="collab"><span>Collaborator:</span> {collaborator}</p>}
            </div>
            <div className="more-like-this">
              <h3>More Like This</h3>
              <div className="similar-websites">
                {similarWebsites.map((website, index) => (
                  <div className="similar-website" key={index}>
                    <img src={website.imageUrl} alt={`${website.name} Poster`} />
                    <p>{website.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
