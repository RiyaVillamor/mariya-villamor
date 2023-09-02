import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Section.scss';
import mariyaLogo from '/mariya.png';

const Section = () => {
    return (
        <div className="section">
            {/* Header */}
            <div className="section-header">
                <img src={mariyaLogo} alt="mariya-logo" className="logo" />
            </div>

            <div className="section-body">
                <div className="who-is-coding">
                    <h2>Who's Coding?</h2>
                </div>

                {/* Content */}
                <div className="section-content">
                    <Link to="#" className="card animated-card">
                        <img src="./home.png" alt="Home" />
                        <span>Home</span>
                    </Link>
                    <Link to="#" className="card animated-card">
                        <img src="./about.png" alt="About" />
                        <span>About</span>
                    </Link>
                    <Link to="#" className="card animated-card">
                        <img src="./projects.png" alt="Projects" />
                        <span>Projects</span>
                    </Link>
                    <Link to="#" className="card animated-card">
                        <img src="./contacts.png" alt="Contact" />
                        <span>Contact</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Section;