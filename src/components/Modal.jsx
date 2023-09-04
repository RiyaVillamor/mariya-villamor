import React from 'react';
import Modal from 'react-modal'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Modal.scss';

// Set appElement to prevent "React-modal" app screen reader warnings
Modal.setAppElement('#root');

const CustomModal = ({ imageUrl, isOpen, onRequestClose }) => {
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
              <div className="similar-website">
                <img src="/nexus.png" alt="Similar website 1" />
                <p>Similar website 1</p>
              </div>
              <div className="similar-website">
                <img src="/nexus.png" alt="Similar Website 2" />
                <p>Similar website 2</p>
              </div>
              <div className="similar-website">
                <img src="/nexus.png" alt="Similar Website 3" />
                <p>Similar website 3</p>
              </div>
              {/* Add more similar websites/cards here */}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
