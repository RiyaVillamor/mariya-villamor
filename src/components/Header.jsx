import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-nav">
          <NavLink to="/" className="header-logo">
            <img src="/mariya.png" alt="mariya-logo" />
          </NavLink>
          <ul>
            <li><NavLink exact to="/home" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="#" activeClassName="active">About</NavLink></li>
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
    </header>
  );
};

export default Header;