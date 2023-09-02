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
                    <Link to="/home" className="card animated-card">
                        <img src="./home.png" alt="Home" />
                        <p>Home</p>
                    </Link>
                    <Link to="/home" className="card animated-card">
                        <img src="./about.png" alt="About" />
                        <p>About</p>
                    </Link>
                    <Link to="/home" className="card animated-card">
                        <img src="./projects.png" alt="Projects" />
                        <p>Projects</p>
                    </Link>
                    <Link to="/home" className="card animated-card">
                        <img src="./contacts.png" alt="Contact" />
                        <p>Contact</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Section;